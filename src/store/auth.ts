import { create } from "zustand";

interface AuthState {
  id: string;
  name: string;
  isAuth: Boolean;
  setAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  id: "",
  name: "",
  isAuth: true,
  setAuth: () => {
    set((state) => ({ isAuth: !state.isAuth }));
  },
}));

export default useAuthStore;
