import { cn } from "@/lib/shadcn";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { t } from "i18next";
import { redirect } from "react-router-dom";
import useAuthStore from "@/store/auth";

const LogoutButton = () => {
  const { setAuth } = useAuthStore();
  const handleLogout = () => {
    console.log("logout");
    setAuth();
    redirect("/auth/signIn");
  };
  return (
    <div className="flex flex-col gap-y-4">
      <hr />
      <Button
        onClick={handleLogout}
        variant="ghost"
        className={cn(
          "flex mb-4 hover:bg-darkPrimary hover:text-white items-center justify-start gap-x-2 w-full"
        )}
      >
        <ExitIcon />
        {t("sidebar.logout")}
      </Button>
    </div>
  );
};

export default LogoutButton;
