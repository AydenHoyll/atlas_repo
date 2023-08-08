import { LEXICON } from "./LEXICON";

export const getCurrentWords = (currentLetter = "a") => {
  return Object.entries(LEXICON[0]).reduce((acc, [key, value]) => {
    if (key[0] === currentLetter.toLowerCase()) {
      acc.push(key);
    }

    return acc;
  }, []);
};
export const LEX_COL = (currentLetter) => {
  const words = getCurrentWords(currentLetter).map((word) => ({
    title: word,
    dataIndex: word,
    render: (text) => (
      <div>
        {text.word} - {text.congacy}
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
