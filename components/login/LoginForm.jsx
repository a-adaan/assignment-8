"use client";

import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState(null);
  const { setAuth } = useAuth();
  const router = useRouter();

  async function setForm(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const user = await performLogin(formData);
      if (user) {
        setAuth(user);
        router.push("/");
      } else {
        setError("User Not Found");
      }
    } catch (error) {
      setError("User not Found");
      console.log(error);
    }
  }

  return (
    <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
      <h4 className="font-bold text-2xl">Sign in</h4>
      <h4 className="font-bold text-lg text-red-700">{error}</h4>
      <form className="login-form" onSubmit={setForm}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Login
        </button>
      </form>

      <p className="text-center text-xs text-gray-600">Or</p>

      <Link
        href="/register"
        className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
      >
        Create New Account
      </Link>
    </div>
  );
}
