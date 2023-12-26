import { HamburgerMenuIcon, BellIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import useSidebarStore from "@/store/sidebar";
import AvatarComponent from "./Avatar";
import Language from "./Language";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarStore((state) => state);

  return (
    <header className="flex justify-between  py-2 px-8 shadow-sm bg-white">
      <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <HamburgerMenuIcon />
      </Button>
      <div className="flex gap-x-2 items-center">
        <Button variant={"ghost"}>
          <Language />
        </Button>
        <Button variant={"ghost"}>
          <BellIcon />
        </Button>
        <AvatarComponent />
      </div>
    </header>
  );
};

export default Header;
