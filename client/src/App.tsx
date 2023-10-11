import { FunctionComponent, ReactElement } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import configureStore from "@/configureStore";
import theme from "@/theme";

const store = configureStore();

const App: FunctionComponent = (): ReactElement => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  </Provider>
);

export default App;
