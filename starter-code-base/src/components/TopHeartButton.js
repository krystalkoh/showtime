import { HeartSwitch } from "@anatoliygatt/heart-switch";
import React, { useState, useContext } from "react";
import styles from "./Heart.module.css";
import ReactContext from "../context/react-context";
import Heart from "react-heart";

const HeartButton = (props) => {
  const [active, setActive] = useState(false);

  const reactCtx = useContext(ReactContext);

  //DO NOT USE && IN NON-JSX
  const handleButtonClick = () => {
    // console.log("data", props.data);

    if (!active) {
      // if (props.data.length) {
      reactCtx.setFavourites((prevState) => {
        return [...prevState, props.data];
      });
      setActive(!active);
      // localStorage.setItem("user", JSON.stringify(reactCtx.favourites));
    } else {
      const favsArr = reactCtx.favourites.filter(
        (data, i) => data.show.id !== props.data.show.id
      );
      setActive(!active);
      reactCtx.setFavourites(favsArr);
    }
  };

  return (
    <div style={{ width: "2rem" }}>
      <Heart isActive={active} onClick={() => handleButtonClick()} />
      {/* <Heart isActive={active} onClick={() => setActive(!active)} /> */}
    </div>
  );
};

export default HeartButton;
