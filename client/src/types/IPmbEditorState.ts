import { TreeItem } from "react-complex-tree";
import { IPmbEditorResource } from "./IPmbEditorResource";

interface IPmbEditorState {
  selectedItem: TreeItem<any> | undefined;
  resources: IPmbEditorResource;
  fetchingContent: boolean;
  processingContent: boolean;
}

export { IPmbEditorState };
