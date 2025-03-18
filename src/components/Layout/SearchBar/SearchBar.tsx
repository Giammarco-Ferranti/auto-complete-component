import React, { useEffect, useRef, useState } from "react";
import Input from "../../Common/Input/Input";
import SearchList from "../../Common/SearchList/SearchList";
import { Word } from "../../../types/types";
import "./SearchBar.css";
import { mockData } from "../../../mockData";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [wordsList, setWordsList] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [searchListModal, setSearchListModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeQuery = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery(event.target.value);
  };

  const fetchData = async () => {
    try {
      setSearchListModal(true);
      const formatQuery = query.toLowerCase();

      //Mock Data
      const data = await new Promise<Word[]>((resolve) => {
        setTimeout(() => {
          const result: Word[] = mockData
            .filter((item) => item.word.startsWith(formatQuery))
            .map((item: Omit<Word, "id">, index: number) => ({
              id: index + 1,
              word: item.word,
            }));
          resolve(result);
        }, 300);
      });
      setWordsList(data);

      // Real API using datamuse free endpoint
      // const results = await fetch(
      //   `https://api.datamuse.com/words?sp=${formatQuery}*`
      // );
      // if (results.status === 200) {
      //   const data = await results.json();
      //   const mapping: Word[] = data.map(
      //     (item: Omit<Word, "id">, index: number) => ({
      //       id: index + 1,
      //       word: item.word,
      //     })
      //   );
      //   setWordsList(mapping);
      // }
    } catch (error) {
      console.log(error);
      setSearchListModal(false);
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setErrorMessage("");
    if (query !== "") {
      const interval = setTimeout(() => {
        fetchData();
      }, 300);
      return () => clearInterval(interval);
    } else {
      setWordsList([]);
      setLoading(false);
    }
  }, [query]);

  //Change modal status if user click outside of div
  const handleModalStatusChange = (event: MouseEvent) => {
    if (listRef.current && !listRef.current.contains(event.target as Node))
      setSearchListModal(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleModalStatusChange);

    return () => document.removeEventListener("click", handleModalStatusChange);
  }, []);

  return (
    <div className="searchbar-wrapper">
      <Input
        type="text"
        placeholder="Search a word..."
        onChange={handleChangeQuery}
        value={query}
        name="searchbar"
      />
      {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
      <SearchList
        words={wordsList}
        query={query}
        loading={loading}
        listRef={listRef}
        open={searchListModal}
      />
    </div>
  );
};

export default SearchBar;
