import { combineReducers } from "redux";
import {
  reducer as editorReducer,
  initialState as editor,
} from "./pages/Editor";

export const initialStates = {
  editor,
};

export default combineReducers({
  editor: editorReducer,
});
