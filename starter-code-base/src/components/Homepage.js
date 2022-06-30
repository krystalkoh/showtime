import React, { useContext } from "react";
import UsTrending from "./UsTrending";
import UkTrending from "./UkTrending";
import ReactContext from "../context/react-context";
import TopRating from "./TopRating";
import styles from "../css/homepage.module.css";

const Homepage = () => {
  return (
    <>
      <h3 class="text-7xl text-red-500 text-center ">SHOWTIME </h3>
      <h2 class="text-5xl ml-3">Top Rated Shows 🍿</h2>
      <br></br>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <TopRating />
      </div>

      <h2 class="text-5xl  ml-3"> Currently showing in USA 🇺🇸 </h2>
      <br></br>
      <UsTrending />
      <br></br>
      <br></br>
      <br></br>
      <h2 class="text-5xl  ml-3">Currently showing in UK 🇬🇧 </h2>
      <UkTrending />
    </>
  );
};

export default Homepage;
