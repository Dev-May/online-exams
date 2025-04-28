"use client";

import Header from "@/components/layout/header/header";
import { LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import CustomSidebar from "@/components/layout/sidebar/sidebar";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <main className="min-h-screen flex p-10">
      {/* Sidebar */}
      <CustomSidebar>
        <li
          className={`flex gap-7 items-center rounded-[10px] p-2 cursor-pointer ${
            pathname === "/admin"
              ? "bg-brand text-white hover:bg-brand-hover"
              : "text-[#696F79]"
          }`}
        >
          <LayoutDashboard
            className={`w-5 h-5 ${
              pathname === "/admin" ? "text-white" : "text-brand"
            }`}
          />
          <Link href={"/admin"} className="text-white">
            Dashboard
          </Link>
        </li>
        <li className="rounded-[10px] hover:bg-gray-100 cursor-pointer">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full flex justify-start items-center gap-7 p-2 text-[#696F79] text-base"
          >
            <LogOut className="!w-5 !h-5 text-brand rotate-180" />
            Log Out
          </Button>
        </li>
      </CustomSidebar>

      {/* Right Section */}
      <div className="flex flex-col w-4/5">
        <div className="flex items-center justify-center">
          <div className="w-full space-y-10">
            <Header />

            {/* body */}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
