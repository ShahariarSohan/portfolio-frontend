import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButtonDashboard() {
      
      const handleLogout = async () => {
        try {
          await signOut({ redirect: true,callbackUrl:"/" });
          // manual SPA navigation
        } catch (err) {
          console.error("Logout failed:", err);
        }
      };
  return (
    <div>
      <Button
        variant="destructive"
        className="w-full flex items-center justify-center gap-2"
        onClick={handleLogout}
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
}