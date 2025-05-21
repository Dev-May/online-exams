import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";

import { ReactNode } from "react";

export default function CustomSidebar({ children }: { children: ReactNode }) {
  return (
    // Sidebar
    <SidebarProvider>
      <Sidebar className="w-1/5 p-4">
        <div className="mb-14">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            className="w-36 brightness-0 saturate-100"
            width={144}
            height={36}
          />
        </div>
        <ul className="flex flex-col gap-8">{children}</ul>
      </Sidebar>
    </SidebarProvider>
  );
}
