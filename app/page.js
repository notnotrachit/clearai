"use client";

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Chat from "@/openai/chat";

async function on_submit(e) {
  e.preventDefault();
  const prompt = e.target[0].value;
  const result = await Chat(prompt);
  console.log(result);
}


export default function Home() {

  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/signup");
  }, [user]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1 className="text-4xl font-bold">ChatAI</h1>
      <form onSubmit={on_submit} className="flex flex-col items-center justify-evenly p-24">
      <input className="w-3/4 h-12 rounded-full border-2 text-black border-gray-300 px-6" placeholder="Enter prompt" />
      <button className="w-3/4 h-12 rounded-full bg-blue-500 text-white font-bold mt-6" type="submit">Submit</button>
      </form>
    </main>
  )
}
