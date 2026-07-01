import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex">
      <div className="w-[20vw] max-w-65 h-screen">
        <Navbar />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default layout;
