import { MapPage } from "./pages/map";

import LanguagePage from "./pages/language";

import HomePage from "./pages/homeP";

export const ROUTES = [
  {
    path: "/map",
    exact: true,
    element: <MapPage />,
  },
  {
    path: "/extra",
    element: <MapPage />,
  },
  {
    path: "/language/:name",
    element: <LanguagePage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <div>Page is not found!</div>,
  },
];
