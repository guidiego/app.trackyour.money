import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/redux/store";

const name = "darkMode";
const darkModeSlice = createSlice({
  name,
  initialState: false,
  reducers: {
    toggleDarkMode(state) {
      if (process.browser) {
        document.body.classList.toggle("dark");
      }

      return !state;
    },
  },
});

export const getDarkMode = (state: RootState) => state.darkMode;

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
