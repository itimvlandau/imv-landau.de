import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TreeItem } from "react-complex-tree";

interface EditorState {
  selectedItem: TreeItem<any> | null;
  content: string | null;
  fetchingContent: boolean;
}

const initialState: EditorState = {
  selectedItem: null,
  content: null,
  fetchingContent: false,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    getContent(state, action: PayloadAction<{ selectedItem: TreeItem<any> }>) {
      console.log("slice getContent", action);
      state.fetchingContent = true;
      state.selectedItem = action.payload.selectedItem;
    },
    getContentSuccess(state, action: PayloadAction<{ content: string }>) {
      console.log("slice getContentSuccess", action);
      state.fetchingContent = false;
      state.content = action.payload.content;
    },
    getContentFailure(state) {
      console.log("slice getContentFailure");
      state.fetchingContent = false;
    },
  },
});

export const editorActions = editorSlice.actions;
export default editorSlice.reducer;
