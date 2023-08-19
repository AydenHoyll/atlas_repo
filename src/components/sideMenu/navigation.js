import {
  BlockOutlined,
  BuildOutlined,
  DesktopOutlined,
  DiffOutlined,
  FontColorsOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

export const NAVIGATION_ITEMS = [
  {
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    icon: <BuildOutlined />,
    label: <Link to="/map">Map</Link>,
  },
  {
    icon: <FontColorsOutlined />,
    label: <Link to="/lexicon">Lexicon</Link>,
  },
  {
    icon: <DiffOutlined />,
    label: <Link to="/generate">Generate lexicon</Link>,
  },
  { icon: <BlockOutlined />, label: <Link to="/features">Features</Link> },
  {
    icon: <DesktopOutlined />,
    label: <Link to="/contacts">Contacts</Link>,
  },
];
