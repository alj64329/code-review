"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const SignUpComponent = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsComfirmPasswordVisible] =
    useState<boolean>(false);
  const [signUpForm, setSignUpForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div className="h-[80vh]">
      <div className="w-[80%] mx-auto pt-4">
        <div>
          <div className="text-3xl font-bold">Create your account</div>
          <div className="text-[#A78FFF]">
            Already have an account?
            <Link href="/auth/sign-in">Sign in</Link>
          </div>
        </div>

        <form
          onSubmit={() => handleSubmit}
          className="flex flex-col pt-10 gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="font-medium text-white-30 text-[13px]">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Jane Smith"
              value={signUpForm.fullname}
              className="text-white-30 border focus:outline-0 border-white-10 px-4 py-2 rounded-lg bg-[#111318]"
              onChange={() => handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-white-30 text-[13px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={signUpForm.email}
              className="text-white-30 border focus:outline-0 border-white-10 px-4 py-2 rounded-lg bg-[#111318]"
              onChange={() => handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-white-30 text-[13px]">
              Password
            </label>
            <div className="text-white-30 border border-white-10 px-4 py-2 rounded-lg bg-[#111318] flex items-center">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="flex-1 focus:outline-0"
                placeholder="**********"
                value={signUpForm.password}
                onChange={() => handleChange}
              />
              {isPasswordVisible ? (
                <LuEyeClosed
                  onClick={() => setIsPasswordVisible(false)}
                  className="text-[16px] flex-none cursor-pointer"
                />
              ) : (
                <LuEye
                  onClick={() => setIsPasswordVisible(true)}
                  className="text-[16px] flex-none cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 pb-6">
            <label className="font-medium text-white-30 text-[13px]">
              Confirm password
            </label>
            <div className="text-white-30 border border-white-10 px-4 py-2 rounded-lg bg-[#111318] flex items-center">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="flex-1 focus:outline-0"
                placeholder="**********"
                value={signUpForm.confirm_password}
                onChange={() => handleChange}
              />
              {isConfirmPasswordVisible ? (
                <LuEyeClosed
                  onClick={() => setIsComfirmPasswordVisible(false)}
                  className="text-[16px] flex-none cursor-pointer"
                />
              ) : (
                <LuEye
                  onClick={() => setIsComfirmPasswordVisible(true)}
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
          <p className=" text-[rgba(255,255,255,0.25)] text-[12px]">
            By creating an account you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
