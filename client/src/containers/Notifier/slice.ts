import { INotifierState } from "@/types/INotifierState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: INotifierState = {
  message: null,
  error: null,
  isNetworkError: false,
  type: "default",
};

const notifierSlice = createSlice({
  name: "notifier",
  initialState,
  reducers: {
    enqueueNotifier(
      state,
      action: PayloadAction<INotifierState>
    ) {
      state.message = action.payload.message;
      state.error = action.payload.error;
      state.isNetworkError = action.payload.isNetworkError;
      state.type = action.payload.type;
    },
    dequeueNotifier() {
      return {...initialState };
    },
  },
});

export const notifierActions = notifierSlice.actions;
export default notifierSlice.reducer;
