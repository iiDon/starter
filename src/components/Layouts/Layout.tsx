import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header/Header";
import { cn } from "@/lib/shadcn";
import useSidebarStore from "@/store/sidebar";

const Layout = () => {
  const { isSidebarOpen } = useSidebarStore((state) => state);

  return (
    <div dir="rtl" className="flex bg-secondary h-screen  justify-center">
      <div className="w-full grid grid-cols-5">
        <div
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
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
