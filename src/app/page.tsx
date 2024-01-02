import getUserData from "@/lib/getUserData";
import { Button } from "@/components/Button";
export default async function Home() {
  const session = await getUserData();
  console.log(session);
  return (
    <div>
      {session && (
        <div className=" flex justify-between px-4 py-3 border-b-2 border-slate-700">
          <h2 className=" font-bold text-2xl">
            {session.user?.name || session.user?.email?.split("@")[0]}
          </h2>
          <Button name="logout" />
        </div>
      )}
      {!session && (
        <div className=" flex justify-between px-4 py-3 border-b-2 border-slate-700">
          <h2 className=" font-bold text-2xl">My App</h2>
          <Button name="signin" />
        </div>
      )}
    </div>
  );
}

// "use client";
// import { signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   const session = useSession();
//   console.log(session);
//   return (
//     <div>
//       {session.data && (
//         <div className=" flex justify-between px-4 py-3 border-b-2 border-slate-700">
//           <h2 className=" font-bold text-2xl">{session.data.user?.name}</h2>
//           <button
//             onClick={() => signOut()}
//             className="border-b-2 bg-slate-900 border-white p-2 rounded-xl hover:font-semibold hover:border-green-600"
//           >
//             Log Out
//           </button>
//         </div>
//       )}
//       {!session.data && (
//         <div className=" flex justify-between px-4 py-3 border-b-2 border-slate-700">
//           <h2 className=" font-bold text-2xl">My App</h2>

//           <button
//             onClick={() => signIn()}
//             className="border-b-2 bg-slate-900 border-white p-2 rounded-xl hover:font-semibold hover:border-green-600"
//           >
//             Sign In
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import Link from "next/link";

// export default async function Home() {
//   //get user session token
//   const session = await getServerSession(authOptions);
//   // session = null || {user: {name, email,image}}

//   return (
//     <div>
//       <h2>My Amazing App</h2>
//       {session && (
//         <div>
//           <p>Signed in as {session.user && session.user.name}</p>
//           <Link href={"/api/auth/signout"}>Sign out by link</Link>
//         </div>
//       )}

//       {!session && <p>Not Signed in</p>}
//     </div>
//   );
// }
