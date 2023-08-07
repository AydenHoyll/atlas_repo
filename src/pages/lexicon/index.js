import React, { useMemo, useState } from "react";
import { getCurrentWords, LEX_COL } from "./COLUMNS";
import { LEXICON } from "./LEXICON";
import { Checkbox, Table } from "antd";

const options = [
  {
    label: "Color-code",
    value: "color",
  },
  {
    label: "Number-code",
    value: "number",
  },
];

const Lexicon = () => {
  const [currentLetter, setCurrentLetter] = useState("a");
  const [showActiveCognacy, setShowActiveCognacy] = useState([]);

  const alphabet = Array.from({ length: 23 }, (_, index) =>
    String.fromCharCode(97 + index)
  ).filter((char) => char !== "j" && char !== "q");

  const onChange = (checkedValues) => {
    setShowActiveCognacy(checkedValues);
  };

  const currentKeys = getCurrentWords(currentLetter);
  const data = useMemo(
    () =>
      LEXICON.map((obj, ix) =>
        currentKeys.reduce((acc, el) => {
          acc[el] = obj[el];
          acc["Names languages"] = obj["Names languages"];
          acc.key = ix;
          return acc;
        }, {})
      ),
    [currentKeys]
  );
  console.log("checkedsss", showActiveCognacy);
  return (
    <>
      <div className="inline-flex flex-wrap gap-5">
        {alphabet.map((letter) => (
          <button
            className="mb-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => setCurrentLetter(letter)}
          >
            {letter}
          </button>
        ))}
        <Checkbox.Group options={options} onChange={onChange} />
      </div>

      <Table
        dataSource={data}
        columns={LEX_COL(currentLetter)}
        scroll={{ y: "90vh" }}
        pagination={{
          position: ["bottomCenter"],
          defaultPageSize: 100,
          pageSize: 100,
          hideOnSinglePage: true,
          responsive: true,
          showSizeChanger: false,
        }}
      />
    </>
  );
};

export default React.memo(Lexicon);
