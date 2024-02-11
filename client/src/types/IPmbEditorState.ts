import { TreeItem } from "react-complex-tree";
import { IPmbEditorResource } from "./IPmbEditorResource";

interface IPmbEditorState {
  selectedItem?: TreeItem<any> | null;
  resources: IPmbEditorResource;
  fetchingContent: boolean;
  processingContent: boolean;
}

export { IPmbEditorState };
