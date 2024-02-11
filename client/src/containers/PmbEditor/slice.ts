import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TreeItem, TreeItemIndex } from "react-complex-tree";
import { INotifierState } from "@/containers/Notifier";

export interface IPmbEditorResource {
  [index: TreeItemIndex]: string | undefined;
}

export interface IPmbEditorState {
  selectedItem?: TreeItem<any> | null;
  resources: IPmbEditorResource;
  fetchingContent: boolean;
  processingContent: boolean;
}

export interface IApplicationState {
  notifier?: INotifierState;
  pmbEditor?: IPmbEditorState;
}

const initialState: IPmbEditorState = {
  resources: {},
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
      state.resources[action.payload.index] = action.payload.content;
    },
    getPmbEditorContentFailure(state) {
      state.fetchingContent = false;
    },
    updatePmbEditorContent(state, action: PayloadAction<{ selectedItem: TreeItem, content: string | undefined }>) {
      state.selectedItem = action.payload.selectedItem;
      state.resources[action.payload.selectedItem.index] = action.payload.content;
    },
    setPmbEditorContent(state, action: PayloadAction<{ index: TreeItemIndex, content: string }>) {
      state.processingContent = true;
      state.resources[action.payload.index] = action.payload.content;
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
