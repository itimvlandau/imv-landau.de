"use client";

import { FunctionComponent, ReactElement } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { router } from "@/router";
import store from "@/store";
import theme from "@/theme";
import Notifier from "@/containers/Notifier";

const App: FunctionComponent = (): ReactElement => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Notifier />
        <RouterProvider router={router} />
        <CssBaseline />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
