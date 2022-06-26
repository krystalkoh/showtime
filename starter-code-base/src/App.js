import React from "react";
import Homepage from "./components/Homepage";
import RandomShows from "./components/RandomShows";
import UsaTrending from "./components/UsaTrending";
import SearchBar from "./components/SearchBar";
import UkTrending from "./components/UkTrending";

function App() {
  return (
    <div>
      <SearchBar></SearchBar>
      <br />
      {/* <RandomShows></RandomShows> */}
      <h2> Currently showing in the US </h2>
      <UsaTrending></UsaTrending>
      <br></br>
      <h2> Currently showing in the UK </h2>
      <UkTrending></UkTrending>
    </div>
  );
}

export default App;
