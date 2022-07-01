import React, { useContext } from "react";
import ReactContext from "../context/react-context";

const Favourites = (props) => {
  const favouritesCtx = useContext(ReactContext);
  // console.log(props.favourites);
  // if don't do the && thing , it'll create the Favourites immediately, therefore need to use && to populate it first
  const favData = favouritesCtx.favourites.map((item) => {
    return (
      <div class="mr-10 ">
        <img class="rounded-xl" src={item.show.image.medium}></img>
      </div>
    );
  });
  // console.log(favData);
  // JSON.parse(window.localStorage.getItem("user"));

  return (
    <>
      <div>
        {favouritesCtx.favourites.length ? (
          <>
            <h2 class="text-5xl ml-3">Favourites ❤️</h2> <br></br>
            {favData}{" "}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Favourites;
