"use client";
import Link from "next/link";
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
          <span className="text-base">Menu</span>
          <div className="size-full flex items-center gap-6 justify-center">
            <Link
              href="/"
              className={`px-6 py-2 bg-slate-900 rounded-lg border-solid border-2 border-slate-800 ${
                handleIsActivePage("/")
                  ? "bg-slate-300 text-black"
                  : "text-white"
              }`}
            >
              Combat Map
            </Link>
            <Link
              href="/"
              className={`text-white px-6 py-2 bg-slate-900 rounded-lg border-solid border-2 border-slate-800 ${
                handleIsActivePage("/live-sessions")
                  ? "bg-slate-300 text-black"
                  : "text-white"
              }`}
            >
              Live Sessions
            </Link>
            <Link
              href="/"
              className={`text-white px-6 py-2 bg-slate-900 rounded-lg border-solid border-2 border-slate-800 ${
                handleIsActivePage("/alerts")
                  ? "bg-slate-300 text-black"
                  : "text-white"
              }`}
            >
              Alerts
            </Link>
            <Link
              href="/"
              className={`text-white px-6 py-2 bg-slate-900 rounded-lg border-solid border-2 border-slate-800 ${
                handleIsActivePage("/saved-sessions")
                  ? "bg-slate-300 text-black"
                  : "text-white"
              }`}
            >
              Saved Sessions
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
