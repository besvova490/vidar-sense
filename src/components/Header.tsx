"use client";

import { Logo } from "@/assets/icons/Logo";
import {
  Archive,
  MapTrifold,
  Record,
  Warning,
} from "@phosphor-icons/react";
import Link from "next/link";

// assets
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const handleIsActivePage = (linkNavigation: string) => {
    return pathname === linkNavigation;
  };

  return (
    <header className="bg-slate-950 shadow-sm">
      <div className="max-w-14xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center text-white">
          <span className="text-base cursor-pointer">
            <Logo />
          </span>
          <div className="hidden md:flex size-full items-center gap-6 justify-center">
            <Link
              href="/"
              className={`px-6 py-2 rounded-lg border-solid border-2 border-slate-800 gap-2 flex align-center ${
                handleIsActivePage("/")
                  ? "bg-slate-300 text-black"
                  : "bg-slate-900 text-white"
              }`}
            >
              <MapTrifold size={24} /> Combat Map
            </Link>
            <Link
              href="/"
              className={`px-6 py-2 rounded-lg border-solid border-2 border-slate-800 gap-2 flex align-center ${
                handleIsActivePage("/live-sessions")
                  ? "bg-slate-300 text-black"
                  : "bg-slate-900 text-white"
              }`}
            >
              <Record color="#EF4444" size={24} /> Live Sessions
            </Link>
            <Link
              href="/"
              className={`px-6 py-2 rounded-lg border-solid border-2 border-slate-800 gap-2 flex align-center ${
                handleIsActivePage("/alerts")
                  ? "bg-slate-300 text-black"
                  : "bg-slate-900 text-white"
              }`}
            >
              <Warning size={24} /> Alerts
            </Link>
            <Link
              href="/"
              className={`px-6 py-2 rounded-lg border-solid border-2 border-slate-800 gap-2 flex align-center ${
                handleIsActivePage("/saved-sessions")
                  ? "bg-slate-300 text-black"
                  : "bg-slate-900 text-white"
              }`}
            >
              <Archive size={24} /> Saved Sessions
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
