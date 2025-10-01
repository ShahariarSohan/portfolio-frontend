// app/dashboard/layout.tsx

import { AppSidebar } from "@/components/modules/dashboard/siderbar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight:"300",
  subsets: ["latin","devanagari"],
});
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 bg-background p-6">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
