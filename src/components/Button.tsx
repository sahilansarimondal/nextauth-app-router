"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";
export function Button({ name }: { name: React.ReactNode }) {
  if (name === "signin") {
    return (
      <button
        onClick={() => signIn()}
        className="border-b-2 bg-slate-900 border-white p-2 rounded-xl hover:font-semibold hover:border-green-600"
      >
        Sign In
      </button>
    );
  }
  return (
    <button
      onClick={() => signOut()}
      className="border-b-2 bg-slate-900 border-white p-2 rounded-xl hover:font-semibold hover:border-green-600"
    >
      Log Out
    </button>
  );
}
