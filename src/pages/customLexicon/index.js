import React, { useMemo, useState } from "react";
import { LEXICON } from "../lexicon/LEXICON";
import ListComponent from "../../components/list";

const NewFeature = () => {
  const [data, setData] = useState();

  const wordData = useMemo(
    () => Object.keys(LEXICON[0]).slice(9, Object.keys(LEXICON[0]).length),
    []
  );

  const langData = useMemo(() => LEXICON.map((el) => Object.values(el)[0]), []);

  const passData = (newData) => {
    setData({
      ...data,
      ...newData,
    });
  };

  console.log("data", data);

  return (
    <>
      <button className="align-middle">Generate TABLE</button>
      <div className="flex flex-row">
        <ListComponent data={wordData} name="words" passData={passData} />
        <ListComponent data={langData} name="languages" passData={passData} />
      </div>
    </>
  );
};
export default NewFeature;
