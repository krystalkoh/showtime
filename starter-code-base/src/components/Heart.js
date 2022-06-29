import { HeartSwitch } from "@anatoliygatt/heart-switch";
import React, { useState, useContext } from "react";
import styles from "./Heart.module.css";
import ReactContext from "../context/react-context";

const Heart = (props) => {
  const reactCtx = useContext(ReactContext);

  const handleButtonClick = () => {
    reactCtx.setFavourites(props.data);
  };

  const [checked, setChecked] = useState(false);
  if (checked) {
    handleButtonClick();
    console.log("this is checked and true");
    // do the give image to the useContext in US
    //push the item into AN ARARY and then push into useContext
  } else {
    console.log("this is unchecked and false");
  }

  return (
    <HeartSwitch
      size="sm"
      className="heart"
      inactiveTrackFillColor="lightGrey" //#cffafe
      inactiveTrackStrokeColor="black" //#22d3ee
      activeTrackFillColor="pink" //#06b6d4
      activeTrackStrokeColor="#0891b2"
      inactiveThumbColor="#ecfeff"
      activeThumbColor="#ecfeff"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );

  //   function AccessibleAndDisabledExample() {
  //     return (
  //       <HeartSwitch
  //         aria-label="Accept Terms and Conditions"
  //         aria-disabled="true"
  //       />
  //     );
  //   }
};

export default Heart;
