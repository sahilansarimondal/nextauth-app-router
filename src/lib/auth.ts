import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

import { connect } from "./dbConnect";
import { User } from "@/models/userModel";

export const authOptions: NextAuthOptions = {
  providers: [
    // Github({
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      id: "credentials",
      name: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        await connect();
        if (!credentials) return null;
        const email = credentials.email;
        const password = credentials.password;

        // Check if user already exists

        const user = await User.findOne({ email });

        if (!user) {
          const userData = { email, password };
          const newUser = new User(userData);
          const savedUser = await newUser.save();

          return {
            id: savedUser._id,
            email: savedUser.email,
          };
        } else {
          if (user.password !== password) {
            return null;
          }
          // User is authenticated
          return {
            id: user._id,
            email: user.email,
          };
        }
      },
    }),
  ], //as Provider[],
  secret: process.env.NEXTAUTH_SECRET_KEY || "",
  callbacks: {
    async jwt({ token }) {
      token.customField = "test";
      return token;
    },
    async session({ token, session }) {
      session.customField = token.customField;
      return session;
    },
    // async session({session, token, user}) {
    //   if(token) {

    //     session.initials = user.initials;
    //   }
    //   return session;
    // }
  },
};
