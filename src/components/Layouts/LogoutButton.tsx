import { cn } from "@/lib/shadcn";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

const LogoutButton = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <hr />
      <Button
        variant="ghost"
        className={cn(
          "flex mb-4 hover:bg-blue-500 hover:text-white items-center justify-start gap-x-2 w-full"
        )}
      >
        <ExitIcon />
        تسجيل الخروج
      </Button>
    </div>
  );
};

export default LogoutButton;
