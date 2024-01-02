// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import { signIn, signOut } from "next-auth/react";

// export default function Ssr({ session }) {
//   console.log(session);
//   return (
//     <div>
//       {session && (
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
//       {!session && (
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

// export async function GetServerSideProps(contex) {
//   const session = await getServerSession(contex.req, contex.res, authOptions);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       session,
//     },
//   };
// }
