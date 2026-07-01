import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-3 border-b border-white">
      {/* Logo */}
      <div>
        <div>CodeReview AI</div>
      </div>

      <div className="bg-[#7B61FF] px-4 py-2 rounded-xl">
        <Link href="/auth/sign-up">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
