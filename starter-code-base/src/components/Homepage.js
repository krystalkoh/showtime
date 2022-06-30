import React, { useContext } from "react";
import UsTrending from "./UsTrending";
import UkTrending from "./UkTrending";
import ReactContext from "../context/react-context";
import TopRating from "./TopRating";
import styles from "../css/homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        {/* <h2 className="text-red-400"> Top Rating </h2> */}
        <TopRating />
      </div>

      <h2 class="text-5xl"> Currently showing in the US </h2>
      <br></br>
      <UsTrending />
      <br></br>
      <h2> Currently showing in the UK </h2>
      <UkTrending />
    </>
  );
};

export default Homepage;
