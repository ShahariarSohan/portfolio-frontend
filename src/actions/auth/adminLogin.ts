"use server";

import { LoginSchemaType } from "@/types/LoginSchema";



export const adminLogin = async (data: LoginSchemaType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
