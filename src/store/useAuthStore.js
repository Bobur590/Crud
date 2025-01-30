// import create from "zustand";
import { create } from "zustand";
const useAuthStore = create((set) => ({
    role: null, // Boshlang‘ich holat null
    login: (role) => set({ role }),
    // Login qilish
    logout: () => set({ role: null }), // Logout qilish
}));
export default useAuthStore;
