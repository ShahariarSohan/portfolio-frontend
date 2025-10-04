"use client";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home,  FileText,Folder } from "lucide-react";
import { usePathname } from "next/navigation";


const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Manage Blogs", url: "/dashboard/manage-blogs", icon: FileText },
  { title: "Manage Projects", url: "/dashboard/manage-projects", icon: Folder },
];

export function SidebarNav() {
   const pathName=usePathname()
     
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className={pathName===item.url?"bg-sidebar-accent":""}>
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
