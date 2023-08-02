import React, { useState } from "react";
import { LEXICON } from "../lexicon/LEXICON";
import { Checkbox, Input } from "antd";

const NewFeature = () => {
  const [inputWord, setInputWord] = useState("");
  const [inputLang, setInputLang] = useState("");

  const wordKeys = Object.keys(LEXICON[0]).slice(
    9,
    Object.keys(LEXICON[0]).length
  );

  const langVals = LEXICON.map((el) => Object.values(el)[0]);

  // state for Words (i.e. LEXICON object keys)
  const [checkedWordItems, setCheckedWordItems] = useState(
    wordKeys.map((key) => ({ key, checked: false }))
  );
  // state for langs (i.e. LEXICON object[0] values)
  const [checkedLangItems, setCheckedLangItems] = useState(
    langVals.map((key) => ({ key, checked: false }))
  );
  const handleCheckboxChange = (item, items, Setter) => {
    Setter(
      items.map((el) =>
        el.key === item ? { ...el, checked: !el.checked } : el
      )
    );
  };

  const getCheckedValues = (checkedItems) => {
    return checkedItems.filter((item) => item.checked).map((item) => item.key);
  };
  const handleClear = (items, setter) => {
    setter(
      items.map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };
  const filteredData = (data, input) => {
    return data.filter((el) =>
      el.key.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <>
      <div className="flex flex-row justify-evenly">
        <div className="w-1/2 flex flex-col">
          <button
            onClick={() => handleClear(checkedWordItems, setCheckedWordItems)}
          >
            123
          </button>
          Checked values: {getCheckedValues(checkedWordItems).join(", ")}
          <Input
            allowClear={true}
            size={"middle"}
            value={inputWord}
            onChange={(event) => setInputWord(event.target.value)}
          />
          <ul>
            {filteredData(checkedWordItems, inputWord).map((item) => (
              <li className="" key={item.key}>
                <Checkbox
                  className="mr-2"
                  checked={item.checked}
                  onClick={() =>
                    handleCheckboxChange(
                      item.key,
                      checkedWordItems,
                      setCheckedWordItems
                    )
                  }
                />
                {item.key}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 flex flex-col">
          <button
            onClick={() => handleClear(checkedLangItems, setCheckedLangItems)}
          >
            123
          </button>
          Checked values: {getCheckedValues(checkedLangItems).join(", ")}
          <Input
            allowClear={true}
            size={"middle"}
            value={inputLang}
            onChange={(event) => setInputLang(event.target.value)}
          />
          <ul>
            {filteredData(checkedLangItems, inputLang).map((item) => (
              <li key={item.key}>
                <Checkbox
                  className="mr-2"
                  checked={item.checked}
                  onClick={() =>
                    handleCheckboxChange(
                      item.key,
                      checkedLangItems,
                      setCheckedLangItems
                    )
                  }
                />
                {item.key}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default NewFeature;
