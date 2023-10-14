import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VariantType } from "notistack";

interface NotifierState {
  error: any | null;
  isNetworkError: boolean;
  type?: VariantType;
}

const initialState: NotifierState = {
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
      action: PayloadAction<{
        error: any;
        isNetworkError: boolean;
        type: VariantType;
      }>
    ) {
      state.error = action.payload.error;
      state.isNetworkError = action.payload.isNetworkError;
      state.type = action.payload.type;
    },
  },
});

export const notifierActions = notifierSlice.actions;
export default notifierSlice.reducer;
