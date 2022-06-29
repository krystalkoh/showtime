import React, { useContext } from "react";
import UsTrending from "./UsTrending";
import UkTrending from "./UkTrending";
import ReactContext from "../context/react-context";
import TopRating from "./TopRating";

const Homepage = () => {
  return (
    <div>
      <h2> Top Rating </h2>
      <TopRating />
      <p class="font-sans hover:font-serif"> Currently showing in the US </p>
      <UsTrending />
      <br></br>
      <h2> Currently showing in the UK </h2>
      <UkTrending />
    </div>
  );
};

export default Homepage;
