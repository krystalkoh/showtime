import React, { useState } from "react";
import Homepage from "./components/Homepage";
import RandomShows from "./components/RandomShows";
import UsTrending from "./components/UsTrending";
import SearchBar from "./components/SearchBar";
import UkTrending from "./components/UkTrending";
import SearchResults from "./components/SearchResults";
import ReactContext from "./context/react-context";
import Favourites from "./components/Favourites";
import styles from "./index.css";

function App() {
  // const [hasSearched, setHasSearched] = useState(false);

  const [favourites, setFavourites] = useState([]);
  // const [newFavourites, setNewFavorites]

  // call some function to add to favourites

  return (
    <div>
      <ReactContext.Provider value={{ favourites, setFavourites }}>
        <div className="container">
          <SearchBar />
          {favourites && (
            <>
              <h1>favourites</h1>
              <Favourites />
            </>
          )}
        </div>
      </ReactContext.Provider>

      {/* <ReactContext.Provider value={{ favourites, setFavourites }}>
        <Routes>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/search" element={<SearchBar />}></Route>
        </Routes>
      </ReactContext.Provider> */}
      {/* <RandomShows></RandomShows> */}
    </div>
  );
}

export default App;
