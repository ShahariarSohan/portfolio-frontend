"use client";


import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import ManageProjectCard from "./ManageProjectCard";


// Demo projects
const projects = [
  {
    id: 1,
    title: "Building a Portfolio with Next.js",
    thumbnail: "/images/sohan.jpg",
    createdAt: "2025-09-01T10:30:00Z",
    updatedAt: "2025-09-10T12:15:00Z",
  },
  {
    id: 2,
    title: "Understanding Prisma ORM for Backend",
    thumbnail: "/images/sohan.jpg",
    createdAt: "2025-08-15T09:00:00Z",
    updatedAt: "2025-08-20T14:45:00Z",
  },
  {
    id: 3,
    title: "MERN Stack Full Tutorial",
    thumbnail: "/images/sohan.jpg",
    createdAt: "2025-07-30T08:20:00Z",
    updatedAt: "2025-08-05T11:10:00Z",
  },
];

export default function ManageProjects() {
  const [projectList, setProjectList] = useState(projects);

  const handleView = (id: number) => {
    console.log("View project", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit project", id);
  };

  const handleDelete = (id: number) => {
    setProjectList(projectList.filter((project) => project.id !== id));
  };

  const handleCreate = () => {
    console.log("Create new project");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage projects</h1>
        <Button
          asChild
          variant="outline"
          onClick={handleCreate}
          className="flex items-center gap-2"
        >
          <Link href={`/dashboard/manage-projects/add`}>
            <Plus size={16} /> Add project
          </Link>
        </Button>
      </div>

      {/* project Cards List */}
      <div className="flex flex-col gap-2">
        {projectList.map((project) => (
          <ManageProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
            createdAt={project.createdAt}
            updatedAt={project.updatedAt}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
