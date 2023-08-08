import React, { useCallback, useMemo, useState } from "react";
import { LEXICON } from "../lexicon/LEXICON";
import ListComponent from "../../components/list";
import { Button, Table } from "antd";

const NewFeature = () => {
  const [data, setData] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const wordData = useMemo(
    () => Object.keys(LEXICON[0]).slice(9, Object.keys(LEXICON[0]).length),
    []
  );

  const langData = useMemo(
    () => LEXICON.map((el) => el["Names languages"]),
    []
  );
  // data from children (selected words and langs)
  const passData = useCallback((newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  }, []);

  // data for the table
  const customData = () => {
    return LEXICON.filter((obj) =>
      data?.languages.includes(obj[Object.keys(obj)[0]])
    );
  };
  // cols for the table
  const customCols = () => {
    if (data.words) {
      const words = data?.words.map((word) => ({
        title: word,
        dataIndex: word,
        render: (text) => (
          <div>
            {text.word} - {text.cognacy}
          </div>
        ),
      }));
      words.unshift({
        title: "Name",
        dataIndex: "Names languages",
        fixed: "left",
      });
      return words;
    }
  };

  return (
    <>
      <Button className="mb-2" onClick={() => setIsClicked(!isClicked)}>
        {!isClicked ? "Generate Table" : "Back"}
      </Button>
      {!isClicked ? (
        <div className="flex flex-row">
          <ListComponent data={wordData} name="words" passData={passData} />
          <ListComponent data={langData} name="languages" passData={passData} />
        </div>
      ) : (
        <Table
          dataSource={customData()}
          columns={customCols()}
          scroll={{ x: "max-content", y: "100vh" }}
        />
      )}
    </>
  );
};
export default NewFeature;
