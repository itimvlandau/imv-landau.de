import { all } from "redux-saga/effects";
import { editorSagas } from "./pages/Editor";

// Merge the sagas together.
// https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
export default function* rootSaga() {
  yield all([editorSagas()]);
}
