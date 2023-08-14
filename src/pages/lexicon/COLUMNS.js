export const LEX_COL = (keys, color, number) => {
  const words = keys.map((word) => ({
    title: word,
    dataIndex: word,
    render: (text) =>
      number ? (
        <span className={color ? "bg-amber-400" : ""}>
          {text.word} {text.cognacy}
        </span>
      ) : (
        <span className={color ? "bg-amber-400" : ""}>{text.word}</span>
      ),
  }));
  words.unshift({
    title: "Name",
    dataIndex: "Names languages",
    fixed: "left",
  });
  return words;
};
