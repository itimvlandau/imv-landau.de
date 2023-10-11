import { combineReducers, Reducer } from "redux";
import { reducer as editorReducer } from "./pages/Editor";

export default (): Reducer =>
  combineReducers({
    editor: editorReducer,
  });
