import React, { useState, useEffect } from "react";
import { getCurrentDate } from "./currentDate";
import ShowInfo from "./ShowInfo";
import styles from "../css/usTrending.module.css";
import ShowInfoModal from "./ShowInfoModal";

const UsTrending = () => {
  const currentDate = getCurrentDate();
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState("");
  const [showId, setShowId] = useState("");
  const [show, setShow] = useState(false);

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
      // console.log(usTrendingArr);

      // const handleFav = (pic) => {
      //   setFav((prevState) => [...prevState, pic]);
      // };
      // const handleShowInfo = (id) => {
      //   return <ShowInfo key={showId}></ShowInfo>;
      // };
      const handleClick = (index) => {
        console.log(index);
        setShowId(index);
        setShow(true);
      };

      const finalUsTrending = usTrendingArr.map((item, index) => {
        return (
          <div
            className="indivShow"
            // onClick={() => {
            // const event = event.target.key;
            // handleClick(event.target);
            // handleShowInfo(showId);
            // }}
          >
            {" "}
            {/* <button onClick={handleClick}> */}
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

      // const handleClick = (index) => {
      //   const idArr = finalUsTrending.filter((d, i) => i === index);
      //   setShowId(idArr);
      // };

      // console.log(showId);
      // passImage();

      // console.log(finalUsTrending);
      setMovieData(finalUsTrending);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // console.log(`component is mounted or rendered`);
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
      ;<div>{movieData}</div>
    </>
  );
};
export default UsTrending;
