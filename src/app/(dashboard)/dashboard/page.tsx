
import DashboardChart from "@/components/modules/dashboard/DashboardChart";
import { DashboardStats } from "@/components/modules/dashboard/DashboardStats";

export default function Dashboard() {
  return (
    <div>
      <DashboardStats></DashboardStats>
      <DashboardChart></DashboardChart>
    </div>
  );
}