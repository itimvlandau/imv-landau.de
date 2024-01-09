import axios from "axios";
import { TreeItemIndex } from "react-complex-tree";

const getPmbEditor = async () => {
  const res = await axios.get("/api/pmbEditor");
  return res.data;
};

const getPmbEditorContent = async (pathname: TreeItemIndex) => {
  const res = await axios.get(`/api/pmbEditorContent`, {
    params: {
      pathname,
    },
    headers: { "Cache-Control": "no-cache" },
    responseType: "arraybuffer",
  });
  return res.data;
};

export { getPmbEditor, getPmbEditorContent };
