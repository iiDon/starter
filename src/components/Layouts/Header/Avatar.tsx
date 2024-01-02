import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";

const AvatarComponent = () => {
  const ROWS = [
    {
      label: "حسابي",
      onClick: () => console.log("حسابي"),
    },
    {
      label: "الإعدادات",
      onClick: () => console.log("الإعدادات"),
    },
    {
      label: "تسجيل الخروج",
      onClick: () => console.log("تسجيل الخروج"),
    },
  ];
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {ROWS.map((row, index) => (
            <div key={row.label}>
              <DropdownMenuItem
                onClick={row.onClick}
                className="cursor-pointer"
              >
                {row.label}
              </DropdownMenuItem>
              {index !== ROWS.length - 1 && <DropdownMenuSeparator />}
            </div>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarComponent;
