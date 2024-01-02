import useAuthStore from "@/store/auth";
import { Navigate } from "react-router-dom";

interface ProtecteddProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtecteddProps) => {
  const { isAuth } = useAuthStore();

  return isAuth ? children : <Navigate to="/auth/signIn" />;
};

export default Protected;
