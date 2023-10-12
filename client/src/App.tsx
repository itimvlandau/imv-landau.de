import { FunctionComponent, ReactElement } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import store from "@/store";
import theme from "@/theme";

const App: FunctionComponent = (): ReactElement => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  </Provider>
);

export default App;
