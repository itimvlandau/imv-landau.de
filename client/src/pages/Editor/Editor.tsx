import { FunctionComponent, ReactElement } from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import MonacoEditor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
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
import { Allotment } from "allotment";
import "allotment/dist/style.css";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

loader.config({ monaco });

loader.init();

const Editor: FunctionComponent = ({}): ReactElement => {
  const tree = useLoaderData() as Record<TreeItemIndex, TreeItem<any>>;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.editor.content);
  // const [editor, setEditor] =
  //   useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  // const monacoEl = useRef(null);

  if (navigation.state === "loading") {
    return <h1>loading...</h1>;
  }
  // useEffect(() => {
  //   if (monacoEl && editor) {
  //     editor.setValue(content || "");
  //   }
  // }, [content]);
  // useEffect(() => {
  //   if (monacoEl) {
  //     setEditor((editor) => {
  //       console.log("setEditor");
  //       if (editor) return editor;
  //       console.log("setEditor init");
  //       return monaco.editor.create(monacoEl.current!, {
  //         theme: "vs-dark",
  //         value: "",
  //         language: "typescript",
  //         automaticLayout: true,
  //       });
  //     });
  //   }
  //   return () => editor?.dispose();
  // }, [monacoEl.current]);

  return (
    <>
      <GlobalStyles
        styles={{
          ":root, body, #root": { height: "100%" },
        }}
      />
      <Allotment defaultSizes={[10, 100]}>
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
          <Tree
            treeId="tree-1"
            rootItem="root"
            treeLabel="Playmobox file tree"
          />
        </UncontrolledTreeEnvironment>
        <MonacoEditor
          height="100vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </Allotment>
    </>
  );
};

export default Editor;
