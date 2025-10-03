"use client";


import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import Link from "next/link";


import { useEffect, useState } from "react";

import { toast } from "sonner";

import { ManageSkeletonCard } from "@/components/shared/skeleton/ManageSkeletonCard";
import { getAllProjects } from "@/services/postServices/getAllProjects";
import { IProject } from "@/types/project.type";
import ManageProjectCard from "./ManageProjectCard";
import deleteProject from "@/actions/projectActions/deleteProject";

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProjects = async () => {
      const res = await getAllProjects({
        cache: "no-store",
        next: { tags: ["PROJECTS"] },
      });
      const projects = res.data;
      setProjects(projects);
      setLoading(false);
    };
    getProjects();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteProject(id);
      console.log(res);
      if (res.success) {
        setProjects(projects.filter((project: IProject) => project.id !== id));
        toast.success("project Deleted");
      } else {
        if (!res.success) {
          toast.error("Something went wrong");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage projects</h1>
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href={`/dashboard/manage-projects/add`}>
            <Plus size={16} /> Add project
          </Link>
        </Button>
      </div>
      <div className="mt-5">
        {loading && (
          <div className="space-y-5">
            <ManageSkeletonCard></ManageSkeletonCard>
            <ManageSkeletonCard></ManageSkeletonCard>
            <ManageSkeletonCard></ManageSkeletonCard>
          </div>
        )}
      </div>{" "}
      {projects.length === 0 && !loading ? (
        <div>
          <h1 className="text-2xl font-semibold text-center mt-10">
            No Data Found
          </h1>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {projects.map((project: IProject) => (
            <ManageProjectCard
              key={project.id}
              id={project.id!}
              title={project.title}
              thumbnail={project.thumbnail}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              createdAt={project.createdAt!}
              updatedAt={project.updatedAt!}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
