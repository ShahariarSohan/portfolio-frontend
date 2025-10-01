"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LogOut } from "lucide-react";
import { ModeToggle } from "@/components/shared/navbar/ModeToggle";

export function SidebarBottom() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

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

        <SidebarMenuItem>
          <Button
            variant="destructive"
            className="w-full flex items-center justify-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </SidebarMenuItem>
      </SidebarMenu>
      <div className="flex items-center justify-between  rounded-md    cursor-pointer ">
        <span className="text-sm font-medium">
         Select Theme
        </span>
        <ModeToggle />
      </div>
    </div>
  );
}
