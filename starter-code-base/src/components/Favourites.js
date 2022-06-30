import React, { useContext } from "react";

import ReactContext from "../context/react-context";

const Favourites = (props) => {
  const favouritesCtx = useContext(ReactContext);
  // console.log(props.favourites);
  // if don't do the && thing , it'll create the Favourites immediately, therefore need to use && to populate it first
  const favData = favouritesCtx.favourites.map((item) => {
    return <img src={item.show.image.medium}></img>;
  });
  // console.log(favData);
  // JSON.parse(window.localStorage.getItem("user"));

  return (
    <>
      <div>{favouritesCtx.favourites.length ? favData : null}</div>
    </>
  );
};

export default Favourites;
