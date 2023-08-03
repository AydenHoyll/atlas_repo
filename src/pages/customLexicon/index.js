import React from "react";
import { LEXICON } from "../lexicon/LEXICON";
import ListComponent from "../../components/list";

const NewFeature = () => {
  const wordData = Object.keys(LEXICON[0]).slice(
    9,
    Object.keys(LEXICON[0]).length
  );
  const langData = LEXICON.map((el) => Object.values(el)[0]);

  return (
    <>
      <button className="align-middle">Generate TABLE</button>
      <div className="flex flex-row">
        <ListComponent data={wordData} name="words" />
        <ListComponent data={langData} name="languages" />
      </div>
    </>
  );
};
export default NewFeature;
