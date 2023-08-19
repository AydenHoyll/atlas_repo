import { MapPage } from "./pages/map";
import LanguagePage from "./pages/language";
import HomePage from "./pages/homePage";
import Lexicon from "./pages/lexicon";
import CustomLexicon from "./pages/customLexicon";
import Features from "./pages/features";

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
  { path: "/generate", element: <CustomLexicon /> },
  { path: "/features", element: <Features /> },
  {
    path: "*",
    element: <div className="text-xl">Page is not found!</div>,
  },
];
