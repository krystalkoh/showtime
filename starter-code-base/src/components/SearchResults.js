import React from "react";

const Results = (props) => {
  const results = props.data.map((item) => {
    return (
      <div key={item.id}>
        {/* <h4>results show here:</h4> */}
        {/* <h6>{item.show.id}</h6>
        <h6>{item.show.url}</h6> */}
        <h6>{item.show.name}</h6>
        {/* //genre is an array  */}
        {/* <h6>{item.show.genre}</h6> */}
        <h6>{item.show.officialSite}</h6>{" "}
        <h6>
          {item.show.rating.average == null
            ? "Rating not available"
            : item.show.rating.average}
        </h6>{" "}
        <h6>{item.show.language}</h6> <p>{item.show.summary}</p>{" "}
        {item.show.rating.average == null ? (
          "Image not available"
        ) : (
          <img src={item.show.image.medium} alt="" key={item.show.id} />
        )}
      </div>
    );
  });

  return (
    <div>
      <button type="submit" value="Submit" onClick={props.onClick}>
        Back to Search
      </button>
      {results}
    </div>
  );
};

export default Results;
