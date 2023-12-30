import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ExitIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import useSidebarStore from "@/store/sidebar";
import { cn } from "@/lib/shadcn";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "./Routes";

import imgUrl from "@/assets/Logo/Nairobi-colored.svg";
import LogoutButton from "./LogoutButton";

export const Logo = () => {
  return (
    <div>
      <img className=" w-36 m-auto" src={imgUrl} alt="logo" />
      <div className="my-4">
        <hr />
      </div>
    </div>
  );
};

const Drawer = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarStore((state) => state);
  const location = useLocation();

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="p-2.5" asChild>
          <HamburgerMenuIcon
            className="w-full text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        dir="rtl"
        className="text-white justify-between flex flex-col bg-primary p-4 h-full"
      >
        <div>
          <Logo />

          <SheetDescription>
            {ROUTES.map((route) => {
              return (
                <SheetClose asChild key={route.path}>
                  <Button
                    className={cn(
                      "flex mb-4 hover:bg-blue-500 text-white hover:text-white items-center justify-start gap-x-2 w-full",
                      location.pathname === route.path && "bg-blue-700 "
                    )}
                    variant="ghost"
                    asChild
                  >
                    <Link to={route.path}>
                      {route.icon}
                      {route.name}
                    </Link>
                  </Button>
                </SheetClose>
              );
            })}
          </SheetDescription>
        </div>
        <LogoutButton />
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
