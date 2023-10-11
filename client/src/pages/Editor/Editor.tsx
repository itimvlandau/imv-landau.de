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
import axios from "axios";
import { useDispatch } from "react-redux";

interface EditorProps {}

const API_URL = "/api";

export const dataLoader = async () => {
  const res = await axios.get(`${API_URL}/editor`);
  return res.data;
};

const Editor: FunctionComponent<EditorProps> = ({}): ReactElement => {
  const tree = useLoaderData() as Record<TreeItemIndex, TreeItem<any>>;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  if (navigation.state === "loading") {
    return <h1>loading...</h1>;
  }

  return (
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
      onSelectItems={(items, index) => {
        console.log("test", items, index);
      }}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Playmobox file tree" />
    </UncontrolledTreeEnvironment>
  );
};

export default Editor;
