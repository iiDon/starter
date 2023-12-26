import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header/Header";
import { cn } from "@/lib/shadcn";
import useSidebarStore from "@/store/sidebar";
import { ScrollArea } from "../ui/scroll-area";

const Layout = () => {
  const { isSidebarOpen } = useSidebarStore((state) => state);

  return (
    <div dir="rtl" className="flex bg-secondary h-screen  justify-center">
      <div className="w-full grid grid-cols-5">
        <div
          className={cn(
            "transition-transform duration-300 ease-in-out",
            isSidebarOpen
              ? "col-span-1 translate-x-0"
              : "hidden -translate-x-full"
          )}
        >
          <Sidebar />
        </div>
        <div className={cn(isSidebarOpen ? "col-span-4" : "col-span-5")}>
          <Header />
          <ScrollArea dir="rtl" className="p-6 h-[90vh] overflow-y-auto">
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Layout;
