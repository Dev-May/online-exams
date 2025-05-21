"use client";

import Header from "@/components/layout/header/header";
import {
  Brain,
  History,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import Link from "next/link";
import CustomSidebar from "@/components/layout/sidebar/sidebar";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  // Hooks
  const pathname = usePathname();

  // Logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <main className="min-h-screen flex p-10">
      {/* Sidebar */}
      <CustomSidebar>
        {/* Dashboard */}
        <li
          className={`flex gap-7 items-center rounded-[10px] p-2 cursor-pointer ${
            pathname === "/student"
              ? "bg-brand text-white hover:bg-brand-hover"
              : "text-[#696F79]"
          }`}
        >
          <LayoutDashboard
            className={`w-5 h-5 ${
              pathname === "/student" ? "text-white" : "text-brand"
            }`}
          />
          <Link href={"/student"}>Dashboard</Link>
        </li>

        {/* Exams List */}
        <li
          className={`flex gap-7 items-center rounded-[10px] p-2 cursor-pointer ${
            pathname === "/student/exams"
              ? "bg-brand text-white hover:bg-brand-hover"
              : "text-[#696F79]"
          }`}
        >
          <Brain
            className={`w-5 h-5 ${
              pathname === "/student/exams" ? "text-white" : "text-brand"
            }`}
          />
          <Link href={"/student/exams"}>Exams</Link>
        </li>

        {/* Quiz History */}
        <li
          className={`flex gap-7 items-center rounded-[10px] p-2 cursor-pointer ${
            pathname === "/student/quiz-history"
              ? "bg-brand text-white hover:bg-brand-hover"
              : "text-[#696F79]"
          }`}
        >
          <History
            className={`w-5 h-5 ${
              pathname === "/student/quiz-history" ? "text-white" : "text-brand"
            }`}
          />
          <Link href={"/student/quiz-history"}>Quiz History</Link>
        </li>

        {/* Account Settings */}
        <li
          className={`flex gap-7 items-center rounded-[10px] p-2 cursor-pointer ${
            pathname === "/auth/account-settings"
              ? "bg-brand text-white hover:bg-brand-hover"
              : "text-[#696F79]"
          }`}
        >
          <Settings
            className={`w-5 h-5 ${
              pathname === "/auth/account-settings"
                ? "text-white"
                : "text-brand"
            }`}
          />
          <Link href={"/auth/account-settings"}>Settings</Link>
        </li>
        <li className="rounded-[10px] hover:bg-gray-100 cursor-pointer">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full flex items-center justify-start gap-7 p-2 text-[#696F79] text-base"
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
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
