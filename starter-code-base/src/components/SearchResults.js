import React from "react";

const Results = (props) => {
  const results = props.data.map((item) => {
    return (
      <div class="pb-3 border border-indigo-600 p-5">
        <div key={item.id}>
          {/* <h4>results show here:</h4> */}
          {/* <h6>{item.show.id}</h6>
        <h6>{item.show.url}</h6> */}
          <h3 class="text-2xl pb-2">{item.show.name}</h3>
          {item.show.image.medium == null ? (
            "Image not available"
          ) : (
            <img src={item.show.image.medium} alt="" key={item.show.id} />
          )}
          <h6>
            {item.show.rating.average == null
              ? "Rating not available"
              : `Rating: ${item.show.rating.average}`}
          </h6>
          <h6>{item.show.language}</h6>
          {/* //genre is an array  */}
          {/* <h6>{item.show.genre}</h6> */}
          <a class="group " href={item.show.officialSite}></a>
          <h6>
            {" "}
            {item.show.summary == null
              ? "Summary not available"
              : item.show.summary}
          </h6>

          <h6 class="group-hover:text-rose-400 ease-in-out mx-2 my-2">
            Link to Official Site
          </h6>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button type="submit" value="Submit" onClick={props.onClick}>
        Back to Search
      </button>
      <br></br>
      <br></br>
      <div id="results" class="grid grid-cols-3 gap-4 mx-3 ">
        {results}
      </div>
      <br></br>
    </div>
  );
};

export default Results;
