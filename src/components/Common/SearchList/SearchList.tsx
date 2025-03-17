import React, { ReactNode } from "react";
import { Word } from "../../../types/types";
import "./SearchList.css";
import { getHighlightedText } from "../../../utils/getHighlightedText";

interface SearchListProps {
  words: Word[];
  query: string;
  loading: boolean;
  listRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
}
const SearchList = ({
  words,
  query,
  loading,
  listRef,
  open,
}: SearchListProps) => {
  let content: ReactNode;

  if (!open || query === "") {
    return null;
  } else if (loading) {
    content = <p>Loading...</p>;
  } else if (query !== "" && words.length === 0 && !loading) {
    content = <p>No Data</p>;
  } else {
    content = words.map((word: Word) => {
      const { matchWord, afterWord } = getHighlightedText(word.word, query);
      return (
        <p key={word.id}>
          <span style={{ fontWeight: "bold" }}>{matchWord}</span>
          {afterWord}
        </p>
      );
    });
  }
  return (
    <div className="searchlist-wrapper" ref={listRef}>
      {content}
    </div>
  );
};

export default SearchList;
