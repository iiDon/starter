import { HamburgerMenuIcon, BellIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import AvatarComponent from "./Avatar";
import Language from "./Language";
import Drawer from "../Drawer";
import useSidebarStore from "@/store/sidebar";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarStore((state) => state);

  return (
    <header className="flex justify-between py-2 px-8 shadow-sm bg-white">
      <div className="block md:hidden">
        <Drawer />
      </div>

      <div>
        <Button
          asChild
          className="hidden cursor-pointer md:block p-2.5"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HamburgerMenuIcon
            className="w-full text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </Button>
      </div>
      <div className="flex gap-x-2 items-center">
        <Language />
        <Button variant={"ghost"}>
          <BellIcon />
        </Button>
        <AvatarComponent />
      </div>
    </header>
  );
};

export default Header;
