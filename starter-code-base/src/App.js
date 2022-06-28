import React, { useState } from "react";
import Homepage from "./components/Homepage";
import RandomShows from "./components/RandomShows";
import UsTrending from "./components/UsTrending";
import SearchBar from "./components/SearchBar";
import UkTrending from "./components/UkTrending";

// import ChinaTrending from "./components/ChinaTrending";

function App() {
  // const [showId, setShowId] = useState("");

  // const removeFromCart = (index) => {
  //   const cartArr = cart.filter((d, i) => i === index);
  //   setShowId(cartArr);
  //   console.log(showId);
  // };

  return (
    <div>
      <SearchBar />
      <br />
      {/* <RandomShows></RandomShows> */}
      <h2> Currently showing in the US </h2>
      <UsTrending></UsTrending>
      <br></br>
      <h2> Currently showing in the UK </h2>
      <UkTrending></UkTrending>
    </div>
  );
}

export default App;
