import { StateCreator } from "zustand";

export interface TextSlice {
  count: number;
  text: string;
  changeTextHandler: (payload: string) => void;
}

export const createTextSlice: StateCreator<TextSlice> = (set) => ({
  text: "initial",
  count: 100,
  changeTextHandler: (payload) => set({ text: payload }),
});
