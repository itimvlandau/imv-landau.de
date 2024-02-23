import { FunctionComponent, ReactElement, useRef } from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import Editor, { Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";

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
import { pmbEditorActions } from "./slice";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const PmbEditor: FunctionComponent = (): ReactElement => {
  const tree = useLoaderData() as Record<TreeItemIndex, TreeItem<any>>;
  const dispatch = useAppDispatch();
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const monacoRef = useRef<Monaco>();
  const navigation = useNavigation();
  const selectedItem = useAppSelector((state) => state.pmbEditor.selectedItem);
  const resources = useAppSelector((state) => state.pmbEditor.resources);
  const defaultValue = selectedItem ? resources[selectedItem.index] : "";

  if (navigation.state === "loading") {
    return <h1>loading...</h1>;
  }

  const onSelect = (item: TreeItem): void => {
    const model = monacoRef.current?.editor
      .getModels()
      .find((model) => model.uri.path === item.index);
    if (!model) {
      dispatch(pmbEditorActions.getPmbEditorContent({ selectedItem: item }));
    } else {
      editorRef.current?.setModel(model);
    }
  };

  function handleEditorWillMount(monaco: Monaco): void {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ): void {
    editorRef.current = editor;
    monacoRef.current = monaco;
  }

  return (
    <>
      <GlobalStyles
        styles={{
          ":root, body, #root": { height: "100%" },
          ".split-view-view": {
            overflow: "auto !important",
          } /* fix scroll hidden in linux bug */,
        }}
      />
      <Allotment defaultSizes={[20, 100]}>
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
          onPrimaryAction={onSelect}
        >
          <Tree
            treeId="tree-1"
            rootItem="root"
            treeLabel="Playmobox file tree"
          />
        </UncontrolledTreeEnvironment>
        <Editor
          theme="vs-dark"
          height="100vh"
          defaultLanguage={undefined}
          defaultValue={defaultValue}
          path={selectedItem?.index.toString()}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
        />
      </Allotment>
    </>
  );
};

export default PmbEditor;
