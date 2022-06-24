import React, { useState, useEffect } from "react";
import RandomResults from "./RandomResults";

const RandomShows = () => {
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState("");

  const fetchPost = async (url, signal) => {
    try {
      const response = await fetch(url, { signal });

      if (response.status !== 200) {
        throw new Error("something went wrong.");
      }

      const movieData = await response.json();
      //   console.log(data);
      //   let randomResults = movieData.map((item) => {
      //     return (
      //       <div>
      //         <img src={item.resolutions.original.url} key={item.id}></img>
      //       </div>
      //     );
      //   });
      const newArr = [];
      for (let i = 0; i <= 9; i++) {
        const newShow = movieData[i].resolutions.original.url;
        newArr.push(newShow);
      }
      const finalRandom = newArr.map((item) => {
        return <img src={item} key={Math.random()}></img>;
      });
      setMovieData(finalRandom);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(`component is mounted or rendered`);
    const url = "https://api.tvmaze.com/shows/1/images";
    const controller = new AbortController();
    fetchPost(url, controller.signal);
  }, []);

  console.log(movieData);

  return <>{movieData}</>;
};
export default RandomShows;
