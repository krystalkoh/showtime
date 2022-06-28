import React from "react";

const Results = (props, index) => {
  const results = props.data.map((item) => {
    return (
      <div>
        <ul>
          {/* <h4>results show here:</h4> */}
          {/* <h6>{item.show.id}</h6>
        <h6>{item.show.url}</h6> */}
          <li key={index}>
            <h6>{item.show.name}</h6>
          </li>
          {/* //genre is an array  */}
          {/* <h6>{item.show.genre}</h6> */}
          <li key={index}>
            <h6>{item.show.officialSite}</h6>{" "}
          </li>
          <li key={index}>
            <h6>
              {item.show.rating.average == null
                ? "Rating not available"
                : item.show.rating.average}
            </h6>{" "}
          </li>
          <li key={index}>
            <h6>{item.show.language}</h6>{" "}
          </li>
          <li key={index}>
            <p>{item.show.summary}</p>{" "}
          </li>
          <li key={index}>
            <img src={item.show.image.medium} alt="" key={item.show.id} />{" "}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      {/* <button type="submit" value="Submit" onClick={props.onClick}>
        Back to Search
      </button> */}
      {results}
    </div>
  );
};

export default Results;
