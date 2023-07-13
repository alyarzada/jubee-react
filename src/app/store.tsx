import { create } from "zustand";
import { createNumberSlice, NumberSlice } from "./slicers/numberSlice";
import { createTextSlice, TextSlice } from "./slicers/textSlice";

export const useStore = create<NumberSlice & TextSlice>((...a) => ({
  ...createNumberSlice(...a),
  ...createTextSlice(...a),
}));
