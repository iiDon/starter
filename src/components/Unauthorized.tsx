import useAuthStore from "@/store/auth";
import { Navigate } from "react-router-dom";

interface AuthorizedProps {
  children?: React.ReactNode;
}

const Unauthorized = ({ children }: AuthorizedProps) => {
  const { isAuth } = useAuthStore();
  return isAuth ? <Navigate to="/dashboard" /> : children;
};

export default Unauthorized;
