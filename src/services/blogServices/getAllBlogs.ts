
type NextCache = "force-cache" | "no-store" | "default";

interface FetchOptions {
  cache?: NextCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}

export const getAllBlogs = async (options?: FetchOptions) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
    cache: options?.cache ?? "default",
    next: options?.next,
    ...options, // spread ensures headers, method, body etc. still work
  });

  return await res.json();
};