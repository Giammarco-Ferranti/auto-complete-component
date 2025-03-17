export const getHighlightedText = (word: string, query: string) => {
  if (!query) return { matchWord: word, afterWord: "" };

  const lowerWord = word.toLowerCase();
  const lowerQuery = query.toLowerCase();

  //Starting index
  const startIndex = lowerWord.indexOf(lowerQuery);
  if (startIndex === -1) return { matchWord: word, afterWord: "" }; //Negative index return word
  const matchWord = lowerWord.slice(startIndex, startIndex + query.length);
  const afterWord = lowerWord.slice(startIndex + query.length, word.length);
  return { matchWord, afterWord };
};
