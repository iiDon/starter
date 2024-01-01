import { useEffect } from "react";
import { columns } from "./components/Users/columns";
import { DataTable } from "./components/ui/data-table";
import useUserStore from "./store/user";
import { useTranslation } from "react-i18next";
import { Button } from "./components/ui/button";
const Users = () => {
  const { users, getUsers, total, isLoading, currentPage, setCurrentPage } =
    useUserStore((state) => state);
  const { t } = useTranslation();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-full">
      <p>
        <Button
          onClick={() => {
            console.log("click");
          }}
        >
          {t("name")}
        </Button>
      </p>
      <DataTable
        columns={columns}
        data={users}
        isLoading={isLoading}
        totalPages={total}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Users;
