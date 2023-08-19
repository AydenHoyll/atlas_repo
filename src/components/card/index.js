import React from "react";
import { AntDesignOutlined, GlobalOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const Cards = ({ avatar = "", website = "", name = "", title = "" }) => {
  return (
    <>
      <Card
        bordered={false}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 5,
        }}
      >
        <Avatar
          src={avatar}
          size={{ xs: 80, sm: 90, md: 100, lg: 110, xl: 120, xxl: 130 }}
          icon={<AntDesignOutlined />}
        />
        <p className="font-semibold text-slate-800 text-center md:text-lg sm:text-md">
          {name}
        </p>
        <p className="text-slate-800 text-center text-base">{title}</p>
        <a
          className="self-center"
          href={website}
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
