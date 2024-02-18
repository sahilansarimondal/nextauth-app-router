import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function getUserData() {
  const session = await getServerSession(authOptions);
  console.log(JSON.stringify(session));
  if (session) {
    return session;
  }
  return undefined;
}
