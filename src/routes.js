import { HomePage } from "./pages/home";

import LanguagePage from "./pages/language";

export const ROUTES = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/extra",
    element: <HomePage />,
  },
  {
    path: "/language/:name",
    element: <LanguagePage />,
  },
  {
    path: "*",
    element: <div>Page is not found!</div>,
  },
];
