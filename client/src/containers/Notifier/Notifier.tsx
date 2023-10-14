import { useAppSelector } from "@/hooks";
import { AxiosError } from "axios";
import { SnackbarMessage, useSnackbar } from "notistack";
import { useEffect, useCallback } from "react";

const Notifier = () => {
  const { enqueueSnackbar } = useSnackbar();
  const error = useAppSelector((state) => state.notifier.error);
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
    }
  }, [error]);
  return <></>;
};

export default Notifier;
