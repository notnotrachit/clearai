"use client";

import Image from 'next/image'

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


export default function Home() {

  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/signup");
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1 className="text-4xl font-bold">ChatAI</h1>
      <input className="w-3/4 h-12 rounded-full border-2 text-black border-gray-300 px-6" placeholder="Enter prompt" />
    </main>
  )
}
