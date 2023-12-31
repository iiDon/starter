import { create } from "zustand";

export interface User {
  id: number;
  title: string;
  price: number;
}

interface UserState {
  getUsers: () => void;
  users: User[];
  isLoading: boolean;
  skip: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  total: number;
  setTotal: (total: number) => void;
}

const useUserStore = create<UserState>((set, get) => ({
  getUsers: async () => {
    const { skip } = get();
    set({ isLoading: true });
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`
    );

    const users: { products: User[]; total: number } = await response.json();

    set({ users: users.products });
    set({ total: users.total });
    set({ isLoading: false });
  },
  users: [],
  skip: 0,
  currentPage: 1,
  isLoading: false,

  setCurrentPage: (currentPage) => {
    set({ currentPage });
    set({ skip: (currentPage - 1) * 10 });
    get().getUsers();
  },
  total: 0,
  setTotal: (total) => set({ total }),
}));

export default useUserStore;
