import React, { useState, useEffect } from "react";
import { getCurrentDate } from "./currentDate";
import Heart from "./Heart";
import styles from "../css/usTrending.module.css";

const UsTrending = () => {
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

      //this is 61 items
      // for (let i = 0; i <= usTrendingImages.length; i++) {
      //49 items
      // filteredArr[i].show.image.medium
      // }
      let filteredArr = usTrendingImages.filter(
        (images) => images.show.image !== null
      );
      console.log(filteredArr);

      //this is to get random shows from the filteredArr
      function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
      }
      const usTrendingArr = getMultipleRandom(filteredArr, 8);
      console.log(usTrendingArr);

      const finalUsTrending = usTrendingArr.map((item) => {
        return (
          <div>
            {" "}
            <img src={item.show.image.medium} key={Math.random()}></img>
            <Heart></Heart>
          </div>
        );
      });

      console.log(finalUsTrending);
      setMovieData(finalUsTrending);
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
export default UsTrending;
