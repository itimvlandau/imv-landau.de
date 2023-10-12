import Editor from "./Editor";
import editorReducer, { editorActions } from "./slice";
import editorSagas from "./sagas";
import * as editorService from "./service";

export {
  Editor as default,
  editorReducer,
  editorActions,
  editorSagas,
  editorService,
};
