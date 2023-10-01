import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from "@/Layout";
import HomePage from "@/pages/Home";
import EditorPage from "@/pages/Editor";
import ErrorPage from "@/pages/Error";

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
          path: "/editor",
          element: <EditorPage />,
        }
      ],
    },
  ] satisfies [RouteObject, ...RouteObject[]];

export const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
  },
});