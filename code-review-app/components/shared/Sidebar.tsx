"use client";

import Link from "next/link";

interface SidebarProps {
  active: "Dashboard" | "New Review" | "History" | "Settings";
  userName?: string;
  userEmail?: string;
}

const NAV_ITEMS: { label: SidebarProps["active"]; href: string }[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "New Review", href: "/dashboard/review" },
  { label: "History", href: "/dashboard/history" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar({
  active,
  userName = "John Dev",
  userEmail = "john@dev.ca",
}: SidebarProps) {
  return (
    <aside className="flex h-full w-[220px] flex-shrink-0 flex-col bg-[#111318]">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 pt-6 pb-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#7B61FF]">
          <span className="text-[11px] font-bold text-white">CR</span>
        </div>
        <span className="text-[13px] font-bold text-white">CodeReview AI</span>
      </div>

      <div className="mx-5 border-t border-white/10" />

      {/* Nav items */}
      <nav className="flex flex-col gap-1 px-3 pt-5">
        {NAV_ITEMS.map((item) => {
          const isActive = item.label === active;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "rounded-lg px-4 py-2.5 text-[13px] transition-colors",
                isActive
                  ? "bg-[#7B61FF]/15 font-semibold text-[#A78FFF]"
                  : "font-normal text-white/30 hover:text-white/60",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User card */}
      <div className="mt-auto px-3 pb-5">
        <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] p-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7B61FF]/25">
            <span className="text-[11px] font-semibold text-[#A78FFF]">
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-white">{userName}</span>
            <span className="text-[11px] text-white/30">{userEmail}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
