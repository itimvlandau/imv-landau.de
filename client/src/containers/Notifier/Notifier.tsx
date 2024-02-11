import { useAppSelector, useAppDispatch } from "@/hooks";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { notifierActions } from "./slice";

const Notifier = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.notifier.error);
  const message = useAppSelector((state) => state.notifier.message);
  const isNetworkError = useAppSelector(
    (state) => state.notifier.isNetworkError
  );
  const type = useAppSelector((state) => state.notifier.type);

  useEffect(() => {
    if (isNetworkError) {
      enqueueSnackbar("No response received from the server.", {
        variant: type,
        preventDuplicate: true,
      });
    } else if (error?.message) {
      enqueueSnackbar(error.message, {
        variant: type,
        preventDuplicate: false,
      });
      if (process.env.NODE_ENV !== "production") {
        console.log("[PMB]", error);
      }
    } else if (message) {
      enqueueSnackbar(message, {
        variant: type,
        preventDuplicate: false,
        persist: false,
        onEntered: () => {
          dispatch(notifierActions.dequeueNotifier());
          
        }
      });
    }
  }, [error, message]);
  return <></>;
};

export default Notifier;
