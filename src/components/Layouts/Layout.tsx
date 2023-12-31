import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header/Header";
import { cn } from "@/lib/shadcn";
import useSidebarStore from "@/store/sidebar";
import { Toaster } from "../ui/toaster";

const Layout = () => {
  const { isSidebarOpen } = useSidebarStore((state) => state);

  return (
    <div dir="rtl" className="flex bg-secondary h-screen  justify-center">
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
          <section dir="rtl" className="px-6 pt-6  overflow-y-auto">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Layout;
