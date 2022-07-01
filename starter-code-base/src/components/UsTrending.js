import React, { useState, useEffect } from "react";
import { getCurrentDate } from "./currentDate";
import Heart from "./HeartButton";
import styles from "../css/usTrending.module.css";
import ShowInfoModal from "./ShowInfoModal";
import SearchBar from "./SearchBar";
import HeartButton from "./HeartButton";

import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";

const UsTrending = (props) => {
  const currentDate = getCurrentDate();
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState("");
  const [showId, setShowId] = useState("");
  const [show, setShow] = useState(false);

  console.log(currentDate);
  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/schedule?country=US&date=${currentDate}`
      );

      //should try and make it random
      const usTrendingImages = await response.json();

      let filteredArr = usTrendingImages.filter(
        (images) => images.show.image !== null
      );
      // console.log(filteredArr);

      //this is to get random shows from the filteredArr
      function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
        return arr.slice(0, num);
      }
      const usTrendingArr = getMultipleRandom(filteredArr, 5);
      // console.log(usTrendingArr);

      // const handleFav = (pic) => {
      //   setFav((prevState) => [...prevState, pic]);
      // };
      // const handleShowInfo = (id) => {
      //   return <ShowInfo key={showId}></ShowInfo>;
      // };
      const handleClick = (index) => {
        // console.log(index);
        setShowId(index);
        setShow(true);
      };
      // const reactCtx = useContext(ReactContext);

      // const handleButtonClick = () => {
      //   reactCtx.setFavourites(item);
      // };

      const finalUsTrending = usTrendingArr.map((item) => {
        // console.log(item);

        const militaryToTweleveHourConverter = (time) => {
          const getTime = time.split(" ");

          const parseTime = getTime.map((res) => {
            // Check for correct time format and split into components or return non-time units unaltered
            let timeUnit = res
              .toString()
              .match(/^([\d]|[0-1]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [res];

            // console.log("timeUnit", timeUnit);
            // If the time format is matched, it will break the components into an array
            // ie. ["19:00", "19", ":", "00", undefined]
            if (timeUnit.length > 1) {
              // Remove full string match value
              timeUnit = timeUnit.slice(1);
              // Set am/pm and assign it to the last index in the array
              timeUnit[5] = timeUnit[0] < 12 ? "am" : "pm";
              // Adjust hours by subtracting 12 from anything greater than 12 and replace the value in the hours index
              timeUnit[0] = timeUnit[0] % 12 || 12;
            }
            // return adjusted time or original string
            return timeUnit.join("");
          });
          // Re-assemble the array pieces into a string
          return parseTime.join(" ");
        };

        const airTime = militaryToTweleveHourConverter(item.airtime);

        return (
          <>
            <div>
              <main className={styles.section}>
                <section className={styles.container}>
                  <div
                    className={classNames([
                      styles.wrapper,
                      styles.wrapperAnime,
                    ])}
                  >
                    {/* <div className={styles.header}> */}

                    <div className={styles.imageWrapper}>
                      {/* //usecontext */}{" "}
                      {/* <div className={classNames([styles.dangerBadge])}> */}
                      {item && <HeartButton data={item} />}
                      <h1 className={styles.text}> {airTime}</h1>
                      {/* </div> */}
                    </div>
                    <img
                      className={styles.image}
                      src={item.show.image.medium}
                      alt="image not available"
                      key={item.show.id}
                      index={item.show.id}
                      onClick={() => {
                        handleClick(item.show.id);
                      }}
                      name={item.show.name}
                    ></img>

                    {/* </div> */}
                  </div>
                </section>
              </main>
            </div>
          </>
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

      <div class="w-auto">{movieData}</div>
    </>
  );
};

export default UsTrending;
