"use client";
import Link from "next/link";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { ArrowLeft } from "lucide-react";

import LogoutButtonDashboard from "@/components/shared/button/LogoutButtonDashboard";
import { AnimatedThemeToggler } from "@/components/shared/navbar/animated-theme-toggler";

export function SidebarBottom() {
  return (
    <div className="border-t border-border p-5 space-y-2">
      <SidebarMenu className="space-y-1">
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/" className="flex items-center gap-2 text-sm">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <div className="flex items-center justify-between  rounded-md    cursor-pointer ">
          <span className="text-sm font-medium">Select Theme</span>
          <AnimatedThemeToggler></AnimatedThemeToggler>
        </div>
        <SidebarMenuItem>
          <LogoutButtonDashboard></LogoutButtonDashboard>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
}
