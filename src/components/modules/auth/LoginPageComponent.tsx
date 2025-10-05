"use client"


import { GoHomeButton } from "@/components/shared/Button/GoHomeButton";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/modules/auth/LoginForm"), {
  ssr: false,
});
export default function LoginPageComponent() {
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-5">
      <LoginForm></LoginForm>
      <GoHomeButton></GoHomeButton>
    </div>
  );
}