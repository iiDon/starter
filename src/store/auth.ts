import { create } from "zustand";

interface AuthState {
  id: string;
  name: string;
  isAuth: Boolean;
}

const useAuthStore = create<AuthState>(() => ({
  id: "",
  name: "",
  isAuth: true,
}));

export default useAuthStore;
