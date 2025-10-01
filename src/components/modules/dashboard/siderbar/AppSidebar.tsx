"use client";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { SidebarNav } from "./SidebarNav";
import { SidebarBottom } from "./SidebarBottom";

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col justify-between h-full">
      <SidebarContent className="flex-grow">
        <SidebarNav />
      </SidebarContent>

      <SidebarBottom />
    </Sidebar>
  );
}
