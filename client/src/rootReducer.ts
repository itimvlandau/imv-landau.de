import { combineReducers } from "redux";
import { editorReducer } from "./pages/Editor";

const rootReducer = combineReducers({
  editor: editorReducer,
});

export default rootReducer;
