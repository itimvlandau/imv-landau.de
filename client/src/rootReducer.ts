import { combineReducers } from "redux";
import { notifierReducer } from "./containers/Notifier";
import { editorReducer } from "./pages/Editor";

const rootReducer = combineReducers({
  notifier: notifierReducer,
  editor: editorReducer,
});

export default rootReducer;
