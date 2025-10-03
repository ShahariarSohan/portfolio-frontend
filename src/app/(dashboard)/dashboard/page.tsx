import DashboardChart from "@/components/modules/dashboard/DashboardChart";
import { DashboardStats, IPropsCount } from "@/components/modules/dashboard/DashboardStats";
import getBlogStats from "@/services/statServices/getBlogStats";
import getProjectStats from "@/services/statServices/getProjectStats";

export default async function Dashboard() {
  const projects = await getProjectStats();
  const blogs = await getBlogStats();
  const dataCount:IPropsCount={projectsCount:projects.data.projectsCount,blogsCount:blogs.data.blogsCount}
    
  
  return (
    <div>
      <DashboardStats dataCount={dataCount}></DashboardStats>
      <DashboardChart dataCount={dataCount}></DashboardChart>
    </div>
  );
}