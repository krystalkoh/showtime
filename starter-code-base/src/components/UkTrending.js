import React, { useState, useEffect } from "react";
import { getCurrentDate } from "./currentDate";
import ShowInfoModal from "./ShowInfoModal";

const UkTrending = () => {
  const currentDate = getCurrentDate();
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState("");
  const [showId, setShowId] = useState("");
  const [show, setShow] = useState(false);

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

      const handleClick = (index) => {
        console.log(index);
        setShowId(index);
        setShow(true);
      };

      // console.log(ukTrendingArr);

      const finalUkTrending = ukTrendingArr.map((item) => {
        return (
          <div className="indivShow">
            <button>
              <img
                src={item.show.image.medium}
                alt="image not available"
                key={item.show.id}
                index={item.show.id}
                onClick={() => {
                  handleClick(item.show.id);
                }}
                name={item.show.name}
              ></img>
            </button>
            <h6> {item.show.name}</h6>
            {/* {console.log(item.show.id)} */}
          </div>
        );
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
  const handleModalOkay = () => {
    setShow(false);
  };
  return (
    <>
      {showId && show && (
        <ShowInfoModal okayClicked={handleModalOkay} showId={showId} />
      )}
      <div>{movieData}</div>
    </>
  );
};
export default UkTrending;
