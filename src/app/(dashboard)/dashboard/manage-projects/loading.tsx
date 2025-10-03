import { ManageSkeletonCard } from "@/components/shared/skeleton/ManageSkeletonCard";

export default function ManageProjectsLoading() {
  return (
    <div className="mt-5 space-y-5">
      <ManageSkeletonCard></ManageSkeletonCard>
      <ManageSkeletonCard></ManageSkeletonCard>
      <ManageSkeletonCard></ManageSkeletonCard>
      <ManageSkeletonCard></ManageSkeletonCard>
    </div>
  );
}