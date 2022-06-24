import React from "react";

const RandomResults = (props) => {
  const randomResults = props.movieData.map((item) => {
    return <img src={item.resolutions.original.url} key={item.id}></img>;
  });
  console.log(RandomResults);

  return <div>{randomResults}</div>;
};

export default RandomResults;
