import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./theme";
import Layout from "./Layout";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import IslamPage from "./pages/Islam";
import IslamProphetsPage from "./pages/IslamProphets";
import IslamSenseOfLivePage from "./pages/IslamSenseOfLive";
import IslamWomenPage from "./pages/IslamWomen";
import IslamKoranPage from "./pages/IslamKoran";
import PrayerPage from "./pages/Prayer";
import DonatePage from "./pages/Donate";
import SchedulePage from "./pages/Schedule";
import LocationPage from "./pages/Location";
import StatutePage from "./pages/Statute";
import ImprintPage from "./pages/Imprint";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/islam",
        element: <IslamPage />,
        children: [
          {
            path: "/islam/prophets",
            element: <IslamProphetsPage />,
          },
          {
            path: "/islam/sense-of-life",
            element: <IslamSenseOfLivePage />,
          },
          {
            path: "/islam/women-and-islam",
            element: <IslamWomenPage />,
          },
          {
            path: "/islam/noble-quran",
            element: <IslamKoranPage />,
          },
        ],
      },
      {
        path: "/prayer",
        element: <PrayerPage />,
      },
      {
        path: "/donate",
        element: <DonatePage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
      {
        path: "/location",
        element: <LocationPage />,
      },
      {
        path: "/statute",
        element: <StatutePage />,
      },
      {
        path: "/imprint",
        element: <ImprintPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
