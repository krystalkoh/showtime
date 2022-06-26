import { HeartSwitch } from "@anatoliygatt/heart-switch";
import React, { useState } from "react";
import styles from "./Heart.module.css";

const Heart = () => {
  function Example() {
    const [checked, setChecked] = useState(false);
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
  }

  //   function AccessibleAndDisabledExample() {
  //     return (
  //       <HeartSwitch
  //         aria-label="Accept Terms and Conditions"
  //         aria-disabled="true"
  //       />
  //     );
  //   }

  return <div>{Example()}</div>;
};

export default Heart;
