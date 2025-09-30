// app/dashboard/layout.tsx

import { AppSidebar } from "@/components/modules/dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
