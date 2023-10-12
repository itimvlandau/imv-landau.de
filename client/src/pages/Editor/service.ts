import axios from "axios";
import { TreeItemIndex } from "react-complex-tree";

const getEditor = async () => {
  const res = await axios.get("/api/editor");
  return res.data;
};

const getContent = async (pathname: TreeItemIndex) => {
  const res = await axios.get(`/api/content`, {
    params: {
      pathname,
    },
    headers: { "Cache-Control": "no-cache" },
    responseType: "arraybuffer",
  });
  return res.data;
};

export { getEditor, getContent };
