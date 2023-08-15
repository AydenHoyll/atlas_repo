import React, { useCallback, useMemo, useState } from "react";
import { LEXICON } from "../lexicon/LEXICON";
import ListComponent from "../../components/list";
import { Checkbox, Table } from "antd";
import { options } from "../lexicon/utils";
import { LEX_COL } from "../lexicon/COLUMNS";

const NewFeature = () => {
  const [data, setData] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [checked, setChecked] = useState(
    options.map((el) => ({ value: el.value, isChecked: false }))
  );

  const wordData = useMemo(
    () => Object.keys(LEXICON[0]).slice(9, Object.keys(LEXICON[0]).length),
    []
  );

  const langData = useMemo(
    () => LEXICON.map((el) => el["Names languages"]),
    []
  );
  // data from children List component (selected words and langs)
  const passData = useCallback((newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  }, []);
  const onCheckBoxChange = (value) => {
    setChecked((prevItems) =>
      prevItems.map((el) =>
        el.value === value ? { ...el, isChecked: !el.isChecked } : el
      )
    );
  };

  // data for the table
  const customData = () => {
    return LEXICON.filter((obj) =>
      data.languages.includes(obj[Object.keys(obj)[0]])
    );
  };

  return (
    <>
      <button
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-2"
        onClick={() => setIsClicked(!isClicked)}
      >
        {!isClicked ? "Generate Table" : "Back"}
      </button>
      {!isClicked ? (
        <div className="flex flex-row md: overflow-y-auto">
          <ListComponent data={wordData} name="words" passData={passData} />
          <ListComponent data={langData} name="languages" passData={passData} />
        </div>
      ) : (
        <>
          {checked.map((el) => (
            <div>
              <Checkbox
                className="mr-2"
                key={el.value}
                checked={el.isChecked}
                onClick={() => onCheckBoxChange(el.value)}
              />
              {el.value}
            </div>
          ))}
          <Table
            dataSource={customData()}
            columns={LEX_COL(
              data.words,
              checked[0].isChecked,
              checked[1].isChecked
            )}
            scroll={{ x: "max-content", y: "100vh" }}
          />
        </>
      )}
    </>
  );
};
export default NewFeature;
