import React, { useState } from "react";

import { Drawer, Menu, Typography } from "antd";
import { NAVIGATION_ITEMS } from "./navigation";
import { MenuFoldOutlined } from "@ant-design/icons";

export const SideMenu = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  const items = NAVIGATION_ITEMS.map((item, ix) => ({
    ...item,
    key: String(ix + 1),
  }));

  return (
    <>
      <div className="flex h-full items-center">
        <MenuFoldOutlined
          className="text-xl cursor-pointer transition-opacity opacity-60 hover:opacity-100"
          onClick={() => setIsMenuDrawerOpen(true)}
        />
        <Typography.Text className="text-white text-base ml-8 pt-1">
          Atlas dev
        </Typography.Text>
      </div>
      <Drawer
        open={isMenuDrawerOpen}
        title="Navigation"
        placement="left"
        onClose={() => setIsMenuDrawerOpen(false)}
        width={250}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={false}
          inlineIndent={12}
          items={items}
        />
      </Drawer>
    </>
  );
};
