
"use server"
const getProjectStats = async() => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats/projects`,{cache:"no-store"});
   return await res.json();
};

export default getProjectStats;