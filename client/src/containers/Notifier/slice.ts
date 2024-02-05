import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VariantType } from "notistack";

interface NotifierState {
  message?: string | null;
  error?: any | null;
  isNetworkError: boolean;
  type?: VariantType;
}

const initialState: NotifierState = {
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
      action: PayloadAction<NotifierState>
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
