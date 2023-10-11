import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
  name: "editor",
  initialState: {
    selectedItemIndex: "",
    selectedItemContent: "",
  },
  reducers: {
    getContent(state, action) {
      // state.selectedItemIndex = action.index;
      // state.selectedItemContent = action.content;
    },
  },
});

export const { getContent } = editorSlice.actions;
export default editorSlice.reducer;
