import { useEffect } from "react";
import { columns } from "../components/Users/columns";
import { DataTable } from "../components/ui/data-table";
import useUserStore from "../store/user";
const Users = () => {
  const { users, getUsers, total, isLoading, currentPage, setCurrentPage } =
    useUserStore((state) => state);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-full">
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
