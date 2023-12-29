import { columns } from "./components/Users/columns";
import { DataTable } from "./components/ui/data-table";
import { getData } from "./components/Users/fakeData";

const Users = () => {
  const data = getData();
  return (
    <div>
      User
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Users;
