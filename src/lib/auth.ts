import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { Provider } from "next-auth/providers/index";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ], //as Provider[],
  secret: process.env.NEXTAUTH_SECRET_KEY || "",
  //   session: {
  //     strategy: "jwt",
  //     maxAge: 30 * 24 * 60 * 60,
  //   },
};
