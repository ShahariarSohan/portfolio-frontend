// components/dashboard/manage/ManageBlogSkeleton.tsx

import { Skeleton } from "@/components/ui/skeleton";

export function ManageSkeletonCard() {
  return (
    <div className="w-full flex items-center justify-between gap-4 p-3 border rounded-md bg-card dark:bg-card-dark">
      {/* Thumbnail + Info */}
      <div className="flex items-center gap-4 flex-1">
        {/* Thumbnail */}
        <Skeleton className="w-16 h-16 rounded-md" />

        {/* Text info */}
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-32" /> {/* title */}
          <div className="flex gap-4">
            <Skeleton className="h-3 w-24" /> {/* createdAt */}
            <Skeleton className="h-3 w-24" /> {/* updatedAt */}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>
    </div>
  );
}
