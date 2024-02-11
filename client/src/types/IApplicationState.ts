import { INotifierState } from "./INotifierState";
import { IPmbEditorState } from "./IPmbEditorState";

interface IApplicationState {
    notifier?: INotifierState;
    pmbEditor?: IPmbEditorState;
}

export { IApplicationState };