import { GoHomeButton } from "@/components/modules/auth/GoHomeButton";
import LoginForm from "@/components/modules/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-5">
      <LoginForm></LoginForm>
      <GoHomeButton></GoHomeButton>
    </div>
  );
}