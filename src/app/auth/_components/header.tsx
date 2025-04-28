"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

// Auth Header Component
export default function Header() {
  // Hooks
  const { data: session } = useSession();

  return (
    <header className="sticky bg-white top-0 z-50 h-16 flex justify-end mb-40">
      {/* Desktop Navigation */}
      <nav className="flex items-center space-x-1">
        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-medium px-4 py-2 bg-background hover:bg-muted transition border-0">
            English ▾
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>العربية</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Navigation */}
        {session ? (
          <Button
            variant="link"
            className="text-brand border rounded-xl hover:text-white hover:bg-brand hover:no-underline"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="link"
            className="text-brand border rounded-xl hover:text-white hover:bg-brand hover:no-underline"
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
}
