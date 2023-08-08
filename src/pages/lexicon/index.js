import React, { useMemo, useState } from "react";
import { LEX_COL } from "./COLUMNS";
import { LEXICON } from "./LEXICON";
import { Checkbox, Table } from "antd";
import { alphabet } from "./utils";

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

  const columnWords = useMemo(() => {
    const x = {};

    Object.entries(LEXICON[0]).forEach(([key, value], index) => {
      const firstLetter = key[0];

      if (alphabet.includes(firstLetter)) {
        x[firstLetter] = [...(x[firstLetter] || []), key];
      }
    });

    return x;
  }, []);

  const currentKeys = useMemo(
    () => columnWords[currentLetter],
    [currentLetter]
  );

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
        <Checkbox.Group options={options} />
      </div>

      <Table
        dataSource={LEXICON}
        columns={LEX_COL(currentKeys)}
        scroll={{ y: "100vh", x: "max-content" }}
        pagination={{
          position: ["bottomCenter"],
          defaultPageSize: 20,
          pageSize: 20,
          hideOnSinglePage: true,
          responsive: true,
          showSizeChanger: false,
        }}
      />
    </>
  );
};

export default React.memo(Lexicon);
