import { LEXICON } from "./LEXICON";

export const LEX_COL = (keys) => {
  const words = keys.map((word) => ({
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
};
