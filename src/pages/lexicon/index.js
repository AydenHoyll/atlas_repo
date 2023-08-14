import React, { useMemo, useState } from "react";
import { LEX_COL } from "./COLUMNS";
import { LEXICON } from "./LEXICON";
import { Checkbox, Table } from "antd";
import { alphabet, options } from "./utils";

const Lexicon = () => {
  const [currentLetter, setCurrentLetter] = useState("a");
  const [checked, setChecked] = useState(
    options.map((el) => ({ value: el.value, isChecked: false }))
  );

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
    [currentLetter, columnWords]
  );
  const onCheckBoxChange = (value) => {
    setChecked((prevItems) =>
      prevItems.map((el) =>
        el.value === value ? { ...el, isChecked: !el.isChecked } : el
      )
    );
  };

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
      </div>

      <Table
        dataSource={LEXICON}
        columns={LEX_COL(
          currentKeys,
          checked[0].isChecked,
          checked[1].isChecked
        )}
        scroll={{ x: "max-content", y: "90vh" }}
        pagination={{
          position: ["bottomCenter"],
          defaultPageSize: 20,
          hideOnSinglePage: true,
          responsive: true,
          showSizeChanger: true,
        }}
      />
    </>
  );
};

export default React.memo(Lexicon);
