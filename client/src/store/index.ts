import axios from "@/lib/axios";
import { create } from "zustand";

type State = {
  user: User | null;
  setUser: (user: User) => void;
  getUser: () => Promise<void>;
  logout: () => void;
};

export const useAppStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  getUser: async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const { data } = await axios.get("/auth/verify");

      set({ user: data });
    } catch (error) {
      localStorage.removeItem("token");
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
