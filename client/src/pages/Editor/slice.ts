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
      state.fetchingContent = true;
      state.selectedItem = action.payload.selectedItem;
    },
    getContentSuccess(state, action: PayloadAction<{ content: string }>) {
      state.fetchingContent = false;
      state.content = action.payload.content;
    },
    getContentFailure(state) {
      state.fetchingContent = false;
    },
  },
});

export const editorActions = editorSlice.actions;
export default editorSlice.reducer;
