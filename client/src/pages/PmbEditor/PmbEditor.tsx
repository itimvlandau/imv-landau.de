import { FunctionComponent, ReactElement } from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { useLocalStorage } from "@rehooks/local-storage";
import MonacoEditor, { monaco } from "./MonacoEditor";
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
import { pmbEditorActions, IApplicationState } from "./slice";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const PmbEditor: FunctionComponent = ({}): ReactElement => {
  const tree = useLoaderData() as Record<TreeItemIndex, TreeItem<any>>;
  const [applicationState, setApplicationState, deleteApplicationState] = useLocalStorage<IApplicationState>('applicationState');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const pmbEditorContent = useAppSelector((state) => state.pmbEditor.content);
  const selectedItem = useAppSelector((state) => state.pmbEditor.selectedItem);

  if (navigation.state === "loading") {
    return <h1>loading...</h1>;
  }

  const onChange = (
    pmbEditorContent: string,
    _event: monaco.editor.IModelContentChangedEvent
  ) => {
    applicationState!.pmbEditor!.content = pmbEditorContent;
    setApplicationState(applicationState);
  };

  const blockContext =
    "editorTextFocus && !suggestWidgetVisible && !renameInputVisible && !inSnippetMode && !quickFixWidgetVisible";
  monaco.editor.addEditorAction({
    id: "saveShortcut2",
    label: "Save shortcut two",
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
    contextMenuGroupId: "1_execution",
    precondition: blockContext,
    run: (editor: monaco.editor.ICodeEditor) => {
      dispatch(
        pmbEditorActions.setPmbEditorContent({
          selectedItem,
          content: editor.getValue(),
        })
      );
    },
  });
  monaco.editor.addEditorAction({
    id: "saveShortcut1",
    label: "Save shortcut one",
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
    contextMenuGroupId: "1_execution",
    precondition: blockContext,
    run: (editor: monaco.editor.ICodeEditor) => {
      dispatch(
        pmbEditorActions.setPmbEditorContent({
          selectedItem,
          content: editor.getValue(),
        })
      );
    },
  });

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
          onPrimaryAction={(item: TreeItem): void => {
            dispatch(
              pmbEditorActions.getPmbEditorContent({ selectedItem: item })
            );
          }}
        >
          <Tree
            treeId="tree-1"
            rootItem="root"
            treeLabel="Playmobox file tree"
          />
        </UncontrolledTreeEnvironment>
        <MonacoEditor
          theme="vs-dark"
          height="100vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          value={pmbEditorContent}
          onChange={onChange}
        />
      </Allotment>
    </>
  );
};

export default PmbEditor;
