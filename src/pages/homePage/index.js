import React from "react";
import { Space, Typography } from "antd";
import Cards from "../../components/card";

const HomePage = () => {
  return (
    <>
      <Space direction="vertical" className="flex items-center">
        <Typography.Title level={2} className="text-slate-900">
          CAMOID Interactive Atlas
        </Typography.Title>
        <Typography.Paragraph className=" lg:max-w-5xl md:max-3xl  md:text-xl text-slate-800 text-justify">
          Welcome to the CAMOID website! This database focuses on the study of
          Bantoid and Bantu languages spoken in southern Cameroon, with a focus
          on underdocumented and underdescribed languages. The database contains
          for now approximately 15,000 lexical items documented for 150
          Cameroonian languages. All these languages belong to the Niger-Congo
          family, one of the world’s largest phyla with over 1,500 languages
          spoken in Sub-Saharan Africa. The Bantoid languages (including the
          Bantu) with 695 languages constitute the largest subgroup within
          Niger-Congo.
        </Typography.Paragraph>
        <Typography.Title level={3} className="text-slate-900">
          NSF Project
        </Typography.Title>
        <Typography.Paragraph className="max-w-5xl md:max-3xl md:text-xl text-slate-800 text-justify">
          The primary goal of the project is to investigate the intricate
          relationships observed between Bantoid and Bantu languages (Bantu
          split from Bantoid languages 5,000 years ago) by compiling the first
          comparative database “CAMOID” that includes lexical, phonological,
          morphological and syntactic data for Bantoid and Bantu languages
          spoken in Cameroon, Equatorial Guinea and Gabon. This project is
          funded by the NSF (award: 2152822 “Reconstructing the evolutionary
          history of languages from non-lexical data”) and runs from June 2022-
          May 2025.
        </Typography.Paragraph>
        <Typography.Title level={3}>People</Typography.Title>
        <div className="inline-flex gap-5 lg:max-w-5xl m-auto md:max-3xl sm:flex-wrap lg:flex-nowrap justify-center">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
      </Space>
    </>
  );
};

export default HomePage;
