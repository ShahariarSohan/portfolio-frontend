"use server";

import { ContactSchemaType } from "@/types/contact.schema";

const contactViaEmail = async (contactData: ContactSchemaType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  const result = await res.json();
  return result;
};

export default contactViaEmail;
