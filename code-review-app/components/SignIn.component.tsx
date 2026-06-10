"use client";
import { LuEyeClosed, LuEye } from "react-icons/lu";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const SignInComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [signInForm, setSignInForm] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;

    setSignInForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
  };

  const handleGoogleAuth = async () => {};
  return (
    <div className="h-[70vh]">
      <div>
        <div>
          <div className="text-3xl font-bold">Sign in to your account</div>
          <div className="text-[#A78FFF]">
            Don't have an account?{" "}
            <Link href="/auth/sign-up">Sign up free</Link>
          </div>
        </div>

        <form onSubmit={() => handleSubmit} className="flex flex-col py-16">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-white-30 text-[13px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={signInForm.email}
              className="text-white-30 border focus:outline-0 border-white-10 px-4 py-2 rounded-lg bg-[#111318]"
              onChange={() => handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 py-6">
            <label className="font-medium text-white-30 text-[13px]">
              Password
            </label>
            <div className="text-white-30 border border-white-10 px-4 py-2 rounded-lg bg-[#111318] flex items-center">
              <input
                type={isVisible ? "text" : "password"}
                className="flex-1 focus:outline-0"
                placeholder="**********"
                value={signInForm.password}
                onChange={() => handleChange}
              />
              {isVisible ? (
                <LuEyeClosed
                  onClick={() => setIsVisible(false)}
                  className="text-[16px] flex-none cursor-pointer"
                />
              ) : (
                <LuEye
                  onClick={() => setIsVisible(true)}
                  className="text-[16px] flex-none cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#7B61FF] text-white py-2 rounded-lg"
          >
            Sign in
          </button>
          <div className="text-[13px] text-white-30 py-4 self-center">
            or continue with
          </div>
          <button
            className="text-white-30 border border-white-10 px-4 py-2 rounded-lg bg-[#111318]"
            onClick={() => handleGoogleAuth()}
          >
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInComponent;
