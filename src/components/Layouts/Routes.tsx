import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

export const useSideBarRoutes = () => {
  const { t } = useTranslation();

  const ROUTES = [
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

  return { ROUTES };
};
