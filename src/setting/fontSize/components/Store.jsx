import { configureStore } from "@reduxjs/toolkit";
import FontSizeSlice from "../feature/FontSizeSlice";
import SoundSlice from "../feature/SoundSlice";

export const store = configureStore({
  reducer: {
    fontSize: FontSizeSlice,
    sound: SoundSlice,
  },
});