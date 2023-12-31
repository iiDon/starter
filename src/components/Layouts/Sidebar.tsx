import { cn } from "@/lib/shadcn";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Logo } from "./Drawer";
import LogoutButton from "./LogoutButton";
import { useSideBarRoutes } from "./Routes";

const Sidebar = () => {
  const location = useLocation();
  const { ROUTES } = useSideBarRoutes();

  return (
    <div className="text-primary-foreground justify-between flex flex-col bg-primary p-4 overflow-y-auto h-screen ">
      <div>
        <Logo />
        <div className="gap-y-4">
          {ROUTES.map((route) => {
            return (
              <Link key={route.path} to={route.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex mb-4 hover:bg-darkPrimary hover:text-primary-foreground items-center justify-start gap-x-2 w-full",
                    location.pathname === route.path && "bg-darkPrimary"
                  )}
                >
                  {route.icon}
                  {route.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
