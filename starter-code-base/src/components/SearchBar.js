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
      <form class="float-right">
        <input
          type="text"
          placeholder="Search for a show"
          onChange={handleInputChange}
        />
        {/* <Button onSubmit={handleSubmit}></Button>
      <input value={input} type="text" placeholder="Enter a Movie Title..." />
      <button type="submit" value="Submit"> */}
        <button
          type="submit"
          onClick={handleSubmit}
          // onSubmit={props.handleClick}
        >
          Search
        </button>
      </form>

      {search && data ? (
        <SearchResults data={data} onClick={handleClick} />
      ) : (
        <>
          <Homepage />
        </>
      )}
    </>
  );
};

export default SearchBar;

//useeffect is happening
