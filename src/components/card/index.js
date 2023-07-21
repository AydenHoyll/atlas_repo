import React from "react";
import { AntDesignOutlined, GlobalOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const Cards = ({
  avatar = "https://plus.unsplash.com/premium_photo-1689607810255-ff7cb8730382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  social = "https://tailwindcss.com/docs/width",
}) => {
  return (
    <>
      <Card
        bordered={false}
        bodyStyle={{ display: "flex", flexDirection: "column" }}
      >
        <Avatar
          src={avatar}
          size={{ xs: 80, sm: 90, md: 100, lg: 110, xl: 120, xxl: 130 }}
          icon={<AntDesignOutlined />}
        />
        <p className="font-semibold text-slate-800 text-center md:text-lg sm:text-md">
          Title w/e
        </p>
        <p className="text-slate-800 text-center text-base">Content</p>
        <a
          className="self-center"
          href={social}
          target="_blank"
          rel="noreferrer"
        >
          <GlobalOutlined className=""></GlobalOutlined>
        </a>
      </Card>
    </>
  );
};

export default Cards;
