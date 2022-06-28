import React, { useState } from "react";
import Homepage from "./components/Homepage";
import RandomShows from "./components/RandomShows";
import UsTrending from "./components/UsTrending";
import SearchBar from "./components/SearchBar";
import UkTrending from "./components/UkTrending";
import SearchResults from "./components/SearchResults";

// import ChinaTrending from "./components/ChinaTrending";

function App() {
  const [hasSearched, setHasSearched] = useState(false);
  // const [showId, setShowId] = useState("");

  const handleSearchClick = () => {
    if (!hasSearched) {
      setHasSearched(true);
      console.log("true");
    } else if (hasSearched) {
      setHasSearched(false);
      console.log("false");
    }
  };
  // const removeFromCart = (index) => {
  //   const cartArr = cart.filter((d, i) => i === index);
  //   setShowId(cartArr);
  //   console.log(showId);
  // };

  return (
    <div>
      <SearchBar></SearchBar>
      {/* <RandomShows></RandomShows> */}
    </div>
  );
}

export default App;
