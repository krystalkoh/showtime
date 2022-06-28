import React, { useState } from "react";
import Results from "./SearchResults";

const SearchBar = (props) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
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
      console.log(searchData);

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
    // setShowRandom(false);
    fetchPost(movieSrc);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a show"
          onChange={handleInputChange}
        />
        {/* <Button onSubmit={handleSubmit}></Button>
      <input value={input} type="text" placeholder="Enter a Movie Title..." />
      <button type="submit" value="Submit"> */}
        <button> Search</button>
      </form>

      {/* //need to map all results  */}
      {data && <Results data={data}></Results>}
    </>
  );
};

export default SearchBar;
