"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/");
  };
  return (
    <div className="wrapper flex justify-center">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30 text-3xl text-center text-teal-300 font-bold">
          Sign in
        </h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-xl text-black"
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-xl text-black"
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <div className="flex justify-center">
            <button
              className="bg-teal-500 my-5 px-3 py-1 rounded-xl"
              type="submit"
            >
              Sign in
            </button>
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-teal-300">
              Sign Up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Page;
