import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import { useContext } from "react";
import MovieContext from "../MovieContext";

const Search = ({ fetchSearch, fetchPopular }) => {
  const [value, setValue] = useState("");
  const { setHeader } = useContext(MovieContext);

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.split(/\s/).join("");
      if (query === "") {
        fetchPopular();
        setHeader("Trending");
      } else {
        fetchSearch(query);
        setHeader(`Results for "${value}"`);
      }
      setValue("");
    }
  };

  return (
    <div className="search-movies">
      <label htmlFor="search">
        <RiSearchLine />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for movies"
        onKeyUp={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
