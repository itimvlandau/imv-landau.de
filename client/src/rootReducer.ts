import { combineReducers } from "redux";
import { notifierReducer } from "./containers/Notifier";
import { pmbEditorReducer } from "./pages/PmbEditor";

const rootReducer = combineReducers({
  notifier: notifierReducer,
  pmbEditor: pmbEditorReducer,
});

export default rootReducer;
