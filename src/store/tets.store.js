import { create } from 'zustand';
const useTestStore = create(set => ({
    data: null,
    setData: data => set({ data }),
}));
export default useTestStore;
