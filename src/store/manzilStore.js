import { create } from 'zustand';
export const useManzilStore = create((set) => ({
    viloyatlar: [],
    tumanlar: [],
    addViloyat: (viloyat) => set((state) => ({
        viloyatlar: [...state.viloyatlar, viloyat],
    })),
    addTuman: (tuman) => set((state) => ({
        tumanlar: [...state.tumanlar, tuman],
    })),
    deleteViloyat: (viloyat) => set((state) => ({
        viloyatlar: state.viloyatlar.filter((v) => v !== viloyat),
    })),
    deleteTuman: (tuman) => set((state) => ({
        tumanlar: state.tumanlar.filter((t) => t.nom !== tuman.nom || t.viloyat !== tuman.viloyat),
    })),
    updateViloyat: (oldViloyat, newViloyat) => set((state) => ({
        viloyatlar: state.viloyatlar.map((v) => v === oldViloyat ? newViloyat : v),
    })),
    updateTuman: (oldTuman, newTuman) => set((state) => ({
        tumanlar: state.tumanlar.map((t) => t.nom === oldTuman.nom && t.viloyat === oldTuman.viloyat ? newTuman : t),
    })),
}));
