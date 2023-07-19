import {BuildOutlined, DesktopOutlined, FontColorsOutlined, HomeOutlined} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

export const NAVIGATION_ITEMS = [
  {
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    icon: <BuildOutlined/>,
    label: <Link to="/">Map</Link>,
  },
  {
    icon: <FontColorsOutlined/>,
    label:<Link to="/">Lexicon</Link>
  },
  {
    icon: <DesktopOutlined />,
    label: <Link to="/contacts">Contacts</Link>,
  },
];
