"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { IPropsCount } from "./DashboardStats";



export default function DashboardChart({dataCount}:{dataCount:IPropsCount}) {
  const data = [
    { name: "Projects", count: dataCount.projectsCount ?? 0 },
    { name: "Blogs", count: dataCount.blogsCount ?? 0 },
    { name: "Users", count: 0 },
  ];
  return (
    <div className="flex justify-center items-center w-full py-6 mt-5">
      <div className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[55%] xl:w-[600px] bg-card rounded-2xl p-4 shadow-md">
        <h2 className="text-center text-lg font-semibold mb-4 text-foreground">
          Overview Summary
        </h2>

        {/* Responsive container scales with parent */}
        <div className="w-full h-[250px] sm:h-[280px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
              barCategoryGap={60} // wider spacing for mobile
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  color: "#f1f5f9",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                {data.map((entry, index) => {
                  const colors = ["#3b82f6", "#10b981", "#f59e0b"]; // blue, green, amber
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
