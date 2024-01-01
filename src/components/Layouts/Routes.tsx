import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useSideBarRoutes = () => {
  const { t, i18n } = useTranslation();

  const routes = [
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

  const [ROUTES, setRoutes] = useState(routes);

  useEffect(() => {
    setRoutes(routes);
  }, [t, i18n]);

  return { ROUTES, setRoutes };
};

export default useSideBarRoutes;
