import React, { useState } from "react";
import Homepage from "./components/Homepage";
import RandomShows from "./components/RandomShows";
import UsTrending from "./components/UsTrending";
import SearchBar from "./components/SearchBar";
import UkTrending from "./components/UkTrending";
import SearchResults from "./components/SearchResults";
import ReactContext from "./context/react-context";
import Favourites from "./components/Favourites";
import styles from "./css/styles.css";

function App() {
  // const [hasSearched, setHasSearched] = useState(false);

  const [favourites, setFavourites] = useState("");
  // const [newFavourites, setNewFavorites]

  return (
    <div>
      <ReactContext.Provider value={{ favourites, setFavourites }}>
        <div className="container">
          <SearchBar />
          <h2>Favourites:</h2>
          <Favourites favourites={favourites} />
        </div>
      </ReactContext.Provider>

      {/* <RandomShows></RandomShows> */}
    </div>
  );
}

export default App;
