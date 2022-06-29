import React, { useContext } from "react";
import ReactContext from "../context/react-context";

const Favourites = (props) => {
  const favouritesCtx = useContext(ReactContext);
  // console.log(props.favourites);
  // if don't do the && thing , it'll create the Favourites immediately, therefore need to use && to populate it first

  return (
    <>
      <div>
        {favouritesCtx.favourites.length ? (
          <h1>{JSON.stringify(favouritesCtx.favourites)}</h1>
        ) : null}
        {props.favourites && (
          <img src={props.favourites.show.image.medium}></img>
        )}
        {/* {props.favourites} */}
      </div>
      {/* <img src={props.favourites.show.image.medium}></img> */}
      {/* <button onClick={handleButtonClick}>Add to Favourites</button> */}
    </>
  );
};

export default Favourites;
