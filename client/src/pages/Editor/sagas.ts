import { put, takeLatest, call } from "redux-saga/effects";
import { editorService } from "@/pages/Editor";
import { ab2str } from "@/helpers/utils";
import { TreeItem } from "react-complex-tree";
import { editorActions } from "@/pages/Editor";

function* onGetContent(action: {
  type: string;
  payload: { selectedItem: TreeItem<any> };
}) {
  console.log("onGetContent", action, action.payload.selectedItem.index);
  try {
    let content: Uint8Array = yield call(() =>
      editorService.getContent(action.payload.selectedItem.index)
    );
    let convertedContent: string = ab2str(content);
    yield put(editorActions.getContentSuccess({ content: convertedContent }));
  } catch (errors) {
    // let data = JSON.parse(ab2str(content));
    //     yield put(actions.getContentFailure(errors));
    console.error(errors);
  }
}

export default function* watchActions() {
  yield takeLatest(editorActions.getContent.type, onGetContent);
}
