import { put, takeLatest, call } from "redux-saga/effects";
import { editorService } from "@/pages/Editor";
import { ab2str } from "@/helpers/utils";
import { TreeItem } from "react-complex-tree";
import { editorActions } from "@/pages/Editor";
import { notifierActions } from "@/containers/Notifier";

function* onGetContent(action: {
  type: string;
  payload: { selectedItem: TreeItem<any> };
}) {
  try {
    let content: Uint8Array = yield call(() =>
      editorService.getContent(action.payload.selectedItem.index)
    );
    yield put(editorActions.getContentSuccess({ content: ab2str(content) }));
  } catch (error: any) {
    yield put(editorActions.getContentFailure());
    yield put(
      notifierActions.enqueueNotifier({
        error: JSON.parse(ab2str(error.response.data)),
        isNetworkError: error.message === "Network Error",
        type: "error",
      })
    );
  }
}

export default function* watchActions() {
  yield takeLatest("editor/getContent", onGetContent);
}
