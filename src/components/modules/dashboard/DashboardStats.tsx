// components/dashboard/DashboardStats.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, Briefcase } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      label: "Total Projects",
      value: 8,
      icon: Briefcase,
      color: "text-blue-500",
    },
    {
      label: "Total Blogs",
      value: 15,
      icon: FileText,
      color: "text-green-500",
    },
    {
      label: "Total Users",
      value: 0,
      icon: Users,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <Card key={label} className="shadow-sm border">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">{label}</p>
              <h3 className="text-2xl font-semibold">{value}</h3>
            </div>
            <Icon className={`w-8 h-8 ${color}`} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
