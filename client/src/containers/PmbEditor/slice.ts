import { IPmbEditorState } from "@/types/IPmbEditorState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TreeItem, TreeItemIndex } from "react-complex-tree";

const initialState: IPmbEditorState = {
  selectedItem: undefined,
  defaultValues: {},
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
    getPmbEditorContentSuccess(state, action: PayloadAction<{ index: TreeItemIndex, content: string }>) {
      state.fetchingContent = false;
      state.defaultValues[action.payload.index] = action.payload.content;
    },
    getPmbEditorContentFailure(state) {
      state.fetchingContent = false;
    },
    setPmbEditorContent(state, action: PayloadAction<{ index: TreeItemIndex, content: string }>) {
      state.processingContent = true;
      state.defaultValues[action.payload.index] = action.payload.content;
    },
    setPmbEditorContentSuccess(state) {
      state.processingContent = false;
    },
    setPmbEditorContentFailure(state) {
      state.processingContent = false;
    },
    setSelectedItem(state, action: PayloadAction<TreeItem<any>>) {
      state.selectedItem = action.payload;
    },
  },
});

export const pmbEditorActions = pmbEditorSlice.actions;
export default pmbEditorSlice.reducer;
