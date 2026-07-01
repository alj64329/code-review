import Header from "@/components/pre-login/Header";
import Hero from "@/components/pre-login/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-full mx-auto">
        <Hero />
      </div>
    </main>
  );
}
