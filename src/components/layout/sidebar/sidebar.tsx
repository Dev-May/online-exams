import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

import { ReactNode } from "react";

export default function CustomSidebar({ children }: { children: ReactNode }) {
  return (
    // Sidebar
    <SidebarProvider>
      <Sidebar className="w-1/5 p-4">
        <div className="mb-14">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="w-36 brightness-0 saturate-100"
          />
        </div>
        <ul className="flex flex-col gap-8">{children}</ul>
      </Sidebar>
    </SidebarProvider>
  );
}
