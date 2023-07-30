import { MapPage } from "./pages/map";
import LanguagePage from "./pages/language";
import HomePage from "./pages/homeP";
import Lexicon from "./pages/lexicon";

export const ROUTES = [
  {
    path: "/map",
    exact: true,
    element: <MapPage />,
  },
  {
    path: "/lexicon",
    element: <Lexicon />,
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
