"use server"

const getBlogStats = async() => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/stats/blogs`,
      { cache: "no-store" }
    );
    return await res.json();
};

export default getBlogStats;