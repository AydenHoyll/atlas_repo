import React, { useCallback, useMemo, useState } from "react";
import { LEXICON } from "../lexicon/LEXICON";
import ListComponent from "../../components/list";
import { Table } from "antd";

const NewFeature = () => {
  const [data, setData] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const wordData = useMemo(
    () => Object.keys(LEXICON[0]).slice(9, Object.keys(LEXICON[0]).length),
    []
  );

  const langData = useMemo(() => LEXICON.map((el) => Object.values(el)[0]), []);
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
            {text.word} - {text.congacy}
          </div>
        ),
      }));
      words.unshift({
        title: "Name",
        dataIndex: "Names languages",
        width: "10%",
      });
      return words;
    }
    throw new Error("you have to select words");
  };
  console.log("data", data);
  return (
    <>
      <button className="align-middle" onClick={() => setIsClicked(!isClicked)}>
        {!isClicked ? "Generate Table" : "Back"}
      </button>
      {!isClicked ? (
        <div className="flex flex-row">
          <ListComponent data={wordData} name="words" passData={passData} />
          <ListComponent data={langData} name="languages" passData={passData} />
        </div>
      ) : (
        <Table dataSource={customData()} columns={customCols()} />
      )}
    </>
  );
};
export default NewFeature;
