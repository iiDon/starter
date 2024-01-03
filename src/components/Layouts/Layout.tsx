import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header/Header";
import { cn } from "@/lib/shadcn";
import useSidebarStore from "@/store/sidebar";
import { Toaster } from "../ui/toaster";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import { useSideBarRoutes } from "./Routes";

const Layout = () => {
  const { isSidebarOpen } = useSidebarStore((state) => state);
  const location = useLocation().pathname;
  const { ROUTES } = useSideBarRoutes();
  const [currentPath, setCurrentPath] = React.useState(
    ROUTES.find((route) => route.path === location)?.name
  );

  const { t } = useTranslation();

  useEffect(() => {
    setCurrentPath(ROUTES.find((route) => route.path === location)?.name);
    console.log(currentPath);
    console.log("location", location);
  }, [location]);

  return (
    <div
      dir={t("common.dir") || "rtl"}
      className="flex bg-slate-50 h-screen  justify-center"
    >
      <Toaster />
      <div className="w-full grid grid-cols-5">
        <div
          className={cn(
            "",
            isSidebarOpen ? "col-span-1 hidden md:block  " : "hidden"
          )}
        >
          <Sidebar />
        </div>
        <div
          className={cn(
            "flex flex-col h-screen",
            isSidebarOpen ? "col-span-5 md:col-span-4" : "col-span-5"
          )}
        >
          <Header />
          <section
            dir={t("common.dir") || "rtl"}
            className="px-6 pt-6  overflow-y-auto"
          >
            <h1 className="md:text-2xl text-xl font-bold mb-4">
              {currentPath}
            </h1>
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Layout;
