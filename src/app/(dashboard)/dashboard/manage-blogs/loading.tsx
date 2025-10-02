import { ManageBlogSkeletonCard } from "@/components/modules/blog/ManageBlogSkeletonCard";

export default function ManageBlogsLoading() {
  return (
    <div className="mt-5 space-y-5">
     <ManageBlogSkeletonCard/>
     <ManageBlogSkeletonCard/>
     <ManageBlogSkeletonCard/>
     <ManageBlogSkeletonCard/>
    </div>
  );
}