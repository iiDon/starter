import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { t } from "i18next";

export const ROUTES = [
  {
    path: "/dashboard/",
    name: t("sidebar.dashboard"),
    icon: <HomeIcon />,
  },
  {
    path: "/dashboard/users",
    name: t("sidebar.users"),
    icon: <PersonIcon />,
  },
];
