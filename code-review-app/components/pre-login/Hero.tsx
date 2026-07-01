import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items- p-6 gap-2">
      <div className="flex flex-col gap-2 justify-center items-center h-[50vh] w-full">
        <h1 className="font-extrabold text-6xl flex flex-col">
          <span>Smarter code,</span>
          <span>faster reviews</span>
        </h1>
        <div className="text-white-60 w-[50%] text-center">
          Paste any code and get instant AI feedback on bugs, best practices,
          and performance — before your reviewer even sees it.
        </div>
      </div>

      <div className="pt-4">
        <div className="px-4 py-2 rounded-xl bg-[#7B61FF] w-fit mx-auto">
          <Link href="/auth/sign-in">Start reviewing</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
