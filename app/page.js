"use client";

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Chat from "@/openai/chat";
import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import CreateDocument from "@/firebase/firebase/create_doc";





export default function Home() {

  async function on_submit(e) {
    document.getElementById("submit_btn").classList.add("hidden");
    e.preventDefault();
    const prompt = e.target[0].value;
    const result = await Chat(prompt);
    console.log(result);
    document.getElementById("response").classList.remove("hidden");
    document.getElementById("response").innerHTML = result;
    document.getElementById("save_btn").classList.remove("hidden");
    
  }

  async function save() {
    document.getElementById("save_btn").classList.add("hidden");
    const response = document.getElementById("response").innerHTML;
    const prompt = document.getElementById("prompt").value;
    const uid = user.uid;
    CreateDocument(uid, prompt, response);
    alert("Saved!");
  }

  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/signup");
  }, [user]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1 className="text-4xl font-bold">ChatAI</h1>
      <form
        onSubmit={on_submit}
        className="flex flex-col items-center justify-evenly p-24"
      >
        <input
          className="w-96 h-10 rounded-xl text-black px-3 shadow-2xl border-2 focus:ring-2 focus:ring-teal-300 border-teal-500"
          placeholder="Enter prompt"
          id="prompt"
        />
        <button
          className="w-32 h-12 rounded-full bg-teal-500 text-white font-bold mt-6"
          type="submit"
          id="submit_btn"
        >
          Submit
        </button>
      </form>
      <div
        id="response"
        className="w-3/4 rounded-xl border-2 text-white border-gray-300 px-6 hidden py-5"
      ></div>
      <button
        className="w-24 h-12 rounded-full bg-teal-500 text-white font-bold mt-6 hidden"
        onClick={save}
        id="save_btn"
      >
        Save
      </button>
    </main>
  );
}
