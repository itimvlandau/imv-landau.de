import { put, takeLatest, call } from "redux-saga/effects";
import { pmbEditorService } from "@/containers/PmbEditor";
import { ab2str } from "@/helpers/utils";
import { TreeItem, TreeItemIndex } from "react-complex-tree";
import { pmbEditorActions } from "@/containers/PmbEditor";
import { notifierActions } from "@/containers/Notifier";

function* onGetPmbEditorContent(action: {
  type: string;
  payload: { selectedItem: TreeItem<any> };
}) {
  try {
    let content: Uint8Array = yield call(() =>
      pmbEditorService.getPmbEditorContent(action.payload.selectedItem.index)
    );
    yield put(
      pmbEditorActions.getPmbEditorContentSuccess({ index: action.payload.selectedItem.index, content: ab2str(content) })
    );
  } catch (error: any) {
    yield put(pmbEditorActions.getPmbEditorContentFailure());
    yield put(
      notifierActions.enqueueNotifier({
        error: JSON.parse(ab2str(error?.response?.data)),
        isNetworkError: error.message === "Network Error",
        type: "error",
      })
    );
  }
}

function* onSetPmbEditorContent(action: {
  type: string;
  payload: { index: TreeItemIndex; content: string };
}) {
  try {
    let message: string = yield call(() =>
      pmbEditorService.setPmbEditorContent(
        action.payload.index,
        action.payload.content
      )
    );
    yield put(pmbEditorActions.setPmbEditorContentSuccess());
    yield put(
      notifierActions.enqueueNotifier({
        message: message,
        error: null,
        isNetworkError: false,
        type: "success",
      })
    );
  } catch (error: any) {
    yield put(pmbEditorActions.setPmbEditorContentFailure());
    yield put(
      notifierActions.enqueueNotifier({
        error: error?.response?.data,
        isNetworkError: error.message === "Network Error",
        type: "error",
      })
    );
  }
}

export default function* watchActions() {
  yield takeLatest("pmbEditor/getPmbEditorContent", onGetPmbEditorContent);
  yield takeLatest("pmbEditor/setPmbEditorContent", onSetPmbEditorContent);
}
