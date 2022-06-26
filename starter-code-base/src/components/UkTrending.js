import React, { useState, useEffect } from "react";
import { getCurrentDate } from "./currentDate";

const UkTrending = () => {
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState("");

  const currentDate = getCurrentDate();

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/schedule?country=GB&date=${currentDate}`
      );
      //   if (response.status !== 200) {
      //     throw new Error("something went wrong.");
      //   }

      //should try and make it random
      const ukTrendingImages = await response.json();
      const ukTrendingArr = [];

      console.log(ukTrendingImages);

      for (let i = 0; i <= 8; i++) {
        let filteredArr = ukTrendingImages.filter(
          (images) => images.show.image !== null
        );

        console.log(filteredArr);
        ukTrendingArr.push(filteredArr[i].show.image.medium);
      }
      // console.log(ukTrendingArr);
      const finalUkTrending = ukTrendingArr.map((item) => {
        return <img src={item} key={Math.random()}></img>;
      });

      setMovieData(finalUkTrending);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(`component is mounted or rendered`);
    fetchPost();
  }, []);

  console.log(movieData);

  return (
    <>
      <div>{movieData}</div>
    </>
  );
};
export default UkTrending;
