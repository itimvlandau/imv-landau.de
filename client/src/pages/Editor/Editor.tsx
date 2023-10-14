import { FunctionComponent, ReactElement } from "react";
import {
  UncontrolledTreeEnvironment,
  Tree,
  StaticTreeDataProvider,
  TreeItemIndex,
  TreeItem,
} from "react-complex-tree";
import "react-complex-tree/lib/style-modern.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { editorActions } from "./slice";

const Editor: FunctionComponent = ({}): ReactElement => {
  const tree = useLoaderData() as Record<TreeItemIndex, TreeItem<any>>;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.editor.content);

  if (navigation.state === "loading") {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <UncontrolledTreeEnvironment
        dataProvider={
          new StaticTreeDataProvider(tree, (item, newName) => ({
            ...item,
            data: newName,
          }))
        }
        getItemTitle={(item) => item.data}
        viewState={{
          "tree-1": {
            expandedItems: ["root"],
          },
        }}
        onPrimaryAction={(item: TreeItem): void => {
          dispatch(editorActions.getContent({ selectedItem: item }));
        }}
      >
        <Tree treeId="tree-1" rootItem="root" treeLabel="Playmobox file tree" />
      </UncontrolledTreeEnvironment>
      <div>{content}</div>
    </>
  );
};

export default Editor;
