"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, Edit2, Trash2 } from "lucide-react";
import Link from "next/link";

interface ManageProjectCardProps {
  id: number;
  title: string;
  thumbnail?: string;
  githubLink?: string;
  liveLink?: string;
  createdAt: string;
  updatedAt: string;
  onDelete: (id: number) => void;
}

export default function ManageProjectCard({
  id,
  title,
  thumbnail,
  createdAt,
  updatedAt,
  onDelete,
}: ManageProjectCardProps) {
  return (
    <div className="w-full flex items-center justify-between gap-4 p-3 border rounded-md bg-card dark:bg-card-dark">
      {/* Thumbnail + Info */}
      <div className="flex items-center gap-4 flex-1">
        {thumbnail && (
          <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col">
          <p className="font-medium text-base line-clamp-1">{title}</p>
          <div className="flex gap-4 text-sm text-muted-foreground mt-1">
            <span>Created: {new Date(createdAt).toLocaleDateString()}</span>
            <span>Updated: {new Date(updatedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {/* View button navigates to the blog view page */}
        <Button asChild variant="outline" size="sm">
          <Link href={`/dashboard/manage-projects/view/${id}`}>
            <Eye size={16} />
          </Link>
        </Button>

        {/* Edit button navigates to the blog edit page */}
        <Button asChild variant="outline" size="sm">
          <Link href={`/dashboard/manage-projects/edit/${id}`}>
            <Edit2 size={16} />
          </Link>
        </Button>

        {/* Delete remains a function call */}
        <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
}
