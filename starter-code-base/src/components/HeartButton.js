import { HeartSwitch } from "@anatoliygatt/heart-switch";
import React, { useState, useContext } from "react";
import styles from "./Heart.module.css";
import ReactContext from "../context/react-context";
import Heart from "react-heart";

const HeartButton = (props) => {
  const [active, setActive] = useState(false);

  const reactCtx = useContext(ReactContext);

  const handleButtonClick = () => {
    console.log("data", props.data);
    setActive(!active);
    // if (props.data.length) {
    reactCtx.setFavourites((prevState) => {
      return [...prevState, props.data];
    });
    // }
  };

  // if (active) {
  //   handleButtonClick();
  //   console.log("this is checked and true");
  //   // do the give image to the useContext in US
  //   //push the item into AN ARARY and then push into useContext
  // } else {
  //   console.log("this is unchecked and false");
  // }

  return (
    <div style={{ width: "2rem" }}>
      <Heart isActive={active} onClick={() => handleButtonClick()} />
      {/* <Heart isActive={active} onClick={() => setActive(!active)} /> */}
    </div>
  );
};

export default HeartButton;
