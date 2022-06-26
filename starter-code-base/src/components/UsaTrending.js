import React, { useState, useEffect } from "react";
import { getCurrentDate } from "./currentDate";

const UsaTrending = () => {
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState("");

  const currentDate = getCurrentDate();

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/schedule?country=US&date=${currentDate}`
      );
      //   if (response.status !== 200) {
      //     throw new Error("something went wrong.");
      //   }

      //should try and make it random
      const usTrendingImages = await response.json();
      const trendingArr = [];
      for (let i = 0; i <= 8; i++) {
        trendingArr.push(usTrendingImages[i].show.image.medium);
      }

      const finalUsTrending = trendingArr.map((item) => {
        return <img src={item} key={Math.random()}></img>;
      });

      setMovieData(finalUsTrending);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(`component is mounted or rendered`);

    // const controller = new AbortController();
    fetchPost();
  }, []);

  return (
    <>
      <div>{movieData}</div>
    </>
  );
};
export default UsaTrending;
