import React, { useState } from "react";
import { LEX_COL } from "./COLUMNS";
import { LEXICON } from "./LEXICON";
import { Table } from "antd";

const Lexicon = () => {
  const [currentLetter, setCurrentLetter] = useState("a");

  const alphabet = Array.from(Array(23)).map((val, index) =>
    String.fromCharCode(97 + index)
  );
  // reduce iterate words and return data...
  const lexiconData = LEXICON.map((el, ix) => ({
    ...el,
    Key: ix,
  }));
  console.log("lexicondata", lexiconData);
  return (
    <>
      <div className="flex gap-5">
        {alphabet.map((letter) => (
          <button className="" onClick={() => setCurrentLetter(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <Table
        dataSource={lexiconData}
        columns={LEX_COL(currentLetter)}
        // idk if fixed header neaded...???
        scroll={{ y: "90vh" }}
      />
    </>
  );
};

export default Lexicon;
