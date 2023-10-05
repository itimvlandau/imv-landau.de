import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/Layout";
import PlaymoboxLayout from "@/PlaymoboxLayout";
import HomePage from "@/pages/Home";
import EditorPage from "@/pages/Editor";
import ErrorPage from "@/pages/Error";
import NewsPage from "@/pages/News";
import IslamPage from "@/pages/Islam";
import IslamProphetsPage from "@/pages/IslamProphets";
import IslamSenseOfLivePage from "@/pages/IslamSenseOfLive";
import IslamWomenPage from "@/pages/IslamWomen";
import IslamKoranPage from "@/pages/IslamKoran";
import PrayerPage from "@/pages/Prayer";
import DonatePage from "@/pages/Donate";
import SchedulePage from "@/pages/Schedule";
import LocationPage from "@/pages/Location";
import StatutePage from "@/pages/Statute";
import ImprintPage from "@/pages/Imprint";

export const routes = [
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
      },
      {
        path: "/islam/prophets",
        element: <IslamProphetsPage />,
      },
      {
        path: "/islam/sense-of-life",
        element: <IslamSenseOfLivePage />,
      },
      {
        path: "/islam/women",
        element: <IslamWomenPage />,
      },
      {
        path: "/islam/koran",
        element: <IslamKoranPage />,
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
  {
    path: "/playmobox",
    element: <PlaymoboxLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/playmobox",
        element: <EditorPage />,
      },
    ],
  },
] satisfies [RouteObject, ...RouteObject[]];

export const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
  },
});
