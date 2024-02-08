import { combineReducers } from "redux";
import { notifierReducer } from "./containers/Notifier";
import { pmbEditorReducer } from "./containers/PmbEditor";

const rootReducer = combineReducers({
  notifier: notifierReducer,
  pmbEditor: pmbEditorReducer,
});

export default rootReducer;
