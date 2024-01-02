import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function getUserData() {
  const session = await getServerSession(authOptions);
  if (session) {
    return session;
  }
  return undefined;
}
