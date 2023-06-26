'use client'
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    return (
      <div className="wrapper flex justify-center">
        <div className="form-wrapper">
          <h1 className="mt-60 mb-30 text-3xl text-center text-teal-300 font-bold my-10">
            Sign up
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
            <br></br>
            <div className="flex justify-center">
              <button
                className="bg-teal-500 my-5 px-3 py-1 rounded-xl"
                type="submit"
              >
                Sign up
              </button>
            </div>

            <p>
              Already have an account?{" "}
              <a href="/signin" className="text-teal-300">
                Sign in here
              </a>
            </p>
          </form>
        </div>
      </div>
    );
}

export default Page;