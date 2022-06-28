import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import UkTrending from "./UkTrending";
import UsTrending from "./UsTrending";

const SearchBar = (props) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
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
    setSearch(input);
    fetchPost(movieSrc);
    // setShowRandom(false);
  };

  // useEffect(() => {
  //   // console.log(`component is mounted or rendered`);
  //   fetchPost(movieSrc);
  // }, [search]);

  return (
    <>
      <form>
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
          onSubmit={props.handleClick}
        >
          Search
        </button>
      </form>

      {data !== "" ? (
        <SearchResults data={data} />
      ) : (
        <>
          <h2> Currently showing in the US </h2>
          <UsTrending />
          <br></br>
          <h2> Currently showing in the UK </h2>
          <UkTrending />
        </>
      )}
    </>
  );
};

export default SearchBar;

//useeffect is happening
