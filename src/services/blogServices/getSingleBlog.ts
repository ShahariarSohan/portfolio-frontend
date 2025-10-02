"use server"

const getSingleBlog =async (id:number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`)
    return await res.json();
};

export default getSingleBlog;