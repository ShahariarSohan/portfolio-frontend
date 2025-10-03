"use server";

const getSingleProject = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`);
  return await res.json();
};

export default getSingleProject;
