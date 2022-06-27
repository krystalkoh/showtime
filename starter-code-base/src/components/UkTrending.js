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

      //this is 61 items
      // for (let i = 0; i <= usTrendingImages.length; i++) {
      //49 items
      // filteredArr[i].show.image.medium
      // }
      let filteredArr = ukTrendingImages.filter(
        (images) => images.show.image !== null
      );
      console.log(filteredArr);

      //this is to get random shows from the filteredArr
      function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
      }
      const ukTrendingArr = getMultipleRandom(filteredArr, 8);
      // console.log(ukTrendingArr);

      const finalUkTrending = ukTrendingArr.map((item) => {
        return <img src={item.show.image.medium} key={item.id}></img>;
      });

      // console.log(finalUkTrending);
      setMovieData(finalUkTrending);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(`component is mounted or rendered`);
    fetchPost();
  }, []);

  // console.log(movieData);

  return (
    <>
      <div>{movieData}</div>
    </>
  );
};
export default UkTrending;
