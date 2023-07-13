import { StateCreator } from "zustand";

export interface NumberSlice {
  count: number;
  incrementHandler: (payload: number) => void;
}

export const createNumberSlice: StateCreator<NumberSlice> = (set) => ({
  count: 0,
  incrementHandler: (payload) =>
    set((state) => ({ count: state.count + payload })),
});
