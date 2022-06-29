import React, { useContext } from "react";
import ReactContext from "../context/react-context";

const Favourites = (props) => {
  // console.log(props.favourites);
  // if don't do the && thing , it'll create the Favourites immediately, therefore need to use && to populate it first

  // const favsArr=
  // function addNewShow(titleArg, imageArg) {
  //   // Get array from local storage, defaulting to empty array if it's not yet set
  //   const showList = JSON.parse(localStorage.getItem("showList") || "[]");

  //   const show = {
  //     title: titleArg,
  //     image: imageArg,
  //   };

  //   showList.push(show);
  //   localStorage.setItem("showList", JSON.stringify(showList));
  // }

  // props.favourites &&
  //   addNewShow(props.favourites.name, props.favourites.show.image.medium);

  // window.localStorage.setItem("user", JSON.stringify(props.favourites));

  return (
    <>
      <div>
        {props.favourites && (
          <img src={props.favourites.show.image.medium}></img>
        )}{" "}
      </div>
      {/* <img src={props.favourites.show.image.medium}></img> */}
      {/* <button onClick={handleButtonClick}>Add to Favourites</button> */}
    </>
  );
};

export default Favourites;
