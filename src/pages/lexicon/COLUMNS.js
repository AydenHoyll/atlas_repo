import { distinctiveColors } from "./utils";

export const LEX_COL = (keys, color, number) => {
  const words = keys.map((word) => ({
    title: word,
    dataIndex: word,
    widths: "auto",
    render: (text) => (
      <span className={color ? distinctiveColors[text.cognacy] : ""}>
        {text.word} {number && text.cognacy}
      </span>
    ),
  }));
  words.unshift({
    title: "Name",
    dataIndex: "Names languages",
    fixed: "left",
  });
  return words;
};
