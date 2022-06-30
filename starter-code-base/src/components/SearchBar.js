import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import UkTrending from "./UkTrending";
import UsTrending from "./UsTrending";
import Homepage from "./Homepage";
import styles from "../css/searchBar.module.css";

const SearchBar = (props) => {
  console.log("Searchbar re-renders");
  const [error, setError] = useState(null);
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  // const [input, setInput] = useState(null);
  // const [showRandom, setShowRandom] = useState(true);

  const movieSrc = `https://api.tvmaze.com/search/shows?q=${input}`;

  const fetchPost = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error("something went wrong.");
      }

      const searchData = await response.json();
      // console.log(searchData);
      setData(searchData);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSearch(input);
    // fetchPost(movieSrc);
    setSearch(true);
  };

  const handleClick = () => {
    setSearch(false);
  };

  useEffect(() => {
    // console.log(`component is mounted or rendered`);
    fetchPost(movieSrc);
  }, [search]);

  return (
    <>
      <form>
        <label class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <input
              class="placeholder:italic placeholder:text-slate-300 block bg-zinc-500 text-zinc-300 w-full border border-zinc-200 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-zinc-200 focus:ring-zinc-200 focus:ring-1 sm:text-sm"
              name="search"
              type="text"
              placeholder="Search for a show"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              class="  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full lg:text-lg pl-3 pr-3 m-2 italic"
            >
              Search
            </button>
          </span>
        </label>
      </form>

      {search && data ? (
        <SearchResults data={data} onClick={handleClick} />
      ) : (
        <Homepage />
      )}
    </>
  );
};

export default SearchBar;

//useeffect is happening
