"use client";
import { signUp } from "@/libs/actions/auth.action";
import Link from "next/link";
import React, {
  ChangeEvent,
  SubmitEvent,
  SubmitEventHandler,
  useState,
} from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const SignUpComponent = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signUp(signUpForm);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const name = target.name;
    console.log(e);

    if (name === "password" && target.value.length < 6) {
      setErrorMsg("Password needs to be more than 6");
      return;
    }

    setSignUpForm((prev) => ({
      email: name === "email" ? target.value : prev.email,
      password: name === "password" ? target.value : prev.password,
    }));
  };

  return (
    <div>
      <div className="w-[80%] mx-auto pt-4">
        <div>
          <div className="text-3xl font-bold text-center">
            Create your account
          </div>
          <div className="text-[#A78FFF] text-center">
            Already have an account?
            <Link href="/auth/sign-in" className="pl-1">
              Sign in
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col pt-10 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-white-30 text-[13px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={signUpForm.email}
              className="text-white-30 border focus:outline-0 border-white-10 px-4 py-2 rounded-lg bg-[#111318] focus:bg-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-white-30 text-[13px]">
              Password
            </label>
            <div className="text-white-30 border border-white-10 px-4 py-2 rounded-lg bg-[#111318] flex items-center">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                className="flex-1 focus:outline-0"
                placeholder="**********"
                value={signUpForm.password}
                onChange={handleChange}
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
            {errorMsg && <div className="text-red-500 text-xm">{errorMsg}</div>}
          </div>

          <button
            type="submit"
            className="bg-[#7B61FF] text-white py-2 rounded-lg cursor-pointer mt-10"
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
