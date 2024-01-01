import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import useSidebarStore from "@/store/sidebar";
import { cn } from "@/lib/shadcn";
import { Link, useLocation } from "react-router-dom";

import imgUrl from "@/assets/Logo/Nairobi-colored.svg";
import LogoutButton from "./LogoutButton";
import { t } from "i18next";
import { ROUTES } from "./Routes";

export const Logo = () => {
  return (
    <div>
      <img className="w-36 m-auto" src={imgUrl} alt="logo" />
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
        <Button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          size={"icon"}
          className="p-2.5"
          asChild
        >
          <HamburgerMenuIcon className="w-full text-primary-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent
        dir={t("common.dir") || "rtl"}
        side={t("common.dir") === "rtl" ? "right" : "left"}
        className="text-primary-foreground justify-between flex flex-col bg-primary p-4 h-full"
      >
        <div>
          <Logo />

          <SheetDescription>
            {ROUTES.map((route) => {
              return (
                <SheetClose asChild key={route.path}>
                  <Button
                    className={cn(
                      "flex mb-4 hover:bg-darkPrimary text-white hover:text-white items-center justify-start gap-x-2 w-full",
                      location.pathname === route.path && "bg-darkPrimary "
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
