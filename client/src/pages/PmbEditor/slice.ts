import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TreeItem } from "react-complex-tree";

interface PmbEditorState {
  selectedItem: TreeItem<any> | null;
  content: string | undefined;
  fetchingContent: boolean;
  processingContent: boolean;
}

const initialState: PmbEditorState = {
  selectedItem: null,
  content: undefined,
  fetchingContent: false,
  processingContent: false,
};

const pmbEditorSlice = createSlice({
  name: "pmbEditor",
  initialState,
  reducers: {
    getPmbEditorContent(state, action: PayloadAction<{ selectedItem: TreeItem<any> }>) {
      state.fetchingContent = true;
      state.selectedItem = action.payload.selectedItem;
    },
    getPmbEditorContentSuccess(state, action: PayloadAction<{ content: string }>) {
      state.fetchingContent = false;
      state.content = action.payload.content;
    },
    getPmbEditorContentFailure(state) {
      state.fetchingContent = false;
    },
    setPmbEditorContent(state, action: PayloadAction<{ selectedItem: TreeItem<any> | null, content: string }>) {
      state.processingContent = true;
      state.selectedItem = action.payload.selectedItem;
      state.content = action.payload.content;
    },
    setPmbEditorContentSuccess(state) {
      state.processingContent = false;
    },
    setPmbEditorContentFailure(state) {
      state.processingContent = false;
    },
  },
});

export const pmbEditorActions = pmbEditorSlice.actions;
export default pmbEditorSlice.reducer;
