import { put, takeLatest, call } from "redux-saga/effects";

function* onGetContent(action: {}) {
  console.log("action", action);

  //   try {
  //     yield call(EditorService.getContent, action);
  //     yield put(actions.getContentSuccess(action.params));
  //   } catch (errors) {
  //     yield put(actions.getContentFailure(errors));
}

export default function* watchActions() {
  yield takeLatest("GET_CONTENT", onGetContent);
}
