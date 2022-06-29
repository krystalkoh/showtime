import React, { useContext } from "react";
import UsTrending from "./UsTrending";
import UkTrending from "./UkTrending";
import ReactContext from "../context/react-context";

const Homepage = () => {
  return (
    <div>
      <h2> Currently showing in the US </h2>
      <UsTrending />
      <br></br>
      <h2> Currently showing in the UK </h2>
      <UkTrending />
    </div>
  );
};

export default Homepage;
