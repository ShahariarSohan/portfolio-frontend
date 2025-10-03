// components/dashboard/DashboardStats.tsx

import { Card, CardContent } from "@/components/ui/card";

import { Users, FileText, Briefcase } from "lucide-react";
export interface IPropsCount{
  projectsCount: number;
  blogsCount:number
}
export async function DashboardStats({dataCount}:{dataCount:IPropsCount}) {
  
  const stats = [
    {
      label: "Total Projects",
      value: dataCount.projectsCount ?? 0,
      icon: Briefcase,
      color: "text-blue-500",
    },
    {
      label: "Total Blogs",
      value: dataCount.blogsCount ?? 0,
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
