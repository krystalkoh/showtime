// import React, { useReducer } from "react";
// import Heart from "./Heart";

// const favsReducer = (state, action) => {
//   switch (action.type) {
//     case "ADDTOFAVS":
//       return [action.payload, ...state];
//   }
// };

// const Favourites = (props) => {
//   const favsArr = [];
//   const [favs, dispatchFavs] = useReducer(favsReducer, favsArr);
//   const [checked, dispatchChecked] = useReducer(checkedReducer, false);

//   const addToFavs = (item) => {
//     dispatchFavs({ type: "ADDTOFAVS", payload: item.payload });
//   };

//   return (
//     <div>
//       <Heart dispatchFavs={dispatchFavs}></Heart>
//       <FavouritesCards
//         products={products}
//         handleClick={addToFavs}
//       ></FavouritesCards>
//     </div>
//   );
// };

// export default Favourites;

// // add state for products and cart, both of which are empty arrays
import React from "react";

const Favourites = () => {
  return <div></div>;
};

export default Favourites;
