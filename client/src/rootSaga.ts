import { all } from "redux-saga/effects";
import { pmbEditorSagas } from "./containers/PmbEditor";

// Merge the sagas together.
// https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
export default function* rootSaga() {
  yield all([pmbEditorSagas()]);
}
