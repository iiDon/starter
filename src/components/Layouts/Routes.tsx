import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";

export const ROUTES = [
  {
    path: "/dashboard/",
    name: "الصفحة الرئيسية",
    icon: <HomeIcon />,
  },
  {
    path: "/dashboard/users",
    name: "المستخدمين",
    icon: <PersonIcon />,
  },
];
