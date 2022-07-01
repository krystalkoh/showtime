import React from "react";
import styles from "../css/searchResults.module.css";

const Results = (props) => {
  const results = props.data.map((item) => {
    return (
      <div class="pb-3 border border-violet-300 rounded-lg p-5">
        <div key={item.id}>
          <h3 class="text-2xl pb-2">{item.show.name}</h3>

          <div class="grid grid-cols-2 gap-2 ">
            {item.show.image.medium == null ? (
              "Image not available"
            ) : (
              <img src={item.show.image.medium} alt="" key={item.show.id} />
            )}

            <div class="pt-20 pl-7">
              <h6>
                {item.show.rating.average == null
                  ? "Rating not available"
                  : `Rating: ${item.show.rating.average}`}
              </h6>
              <h6>Language: {item.show.language}</h6>

              <a class="group " href={item.show.officialSite}>
                <div class="group-hover:text-rose-400 ease-in-out my-2  ">
                  Link to Official Site
                </div>
              </a>
            </div>
          </div>

          <h6 class="pl-0 italic pt-3">
            {" "}
            {item.show.summary == null ? (
              <p>Summary not available</p>
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: item.show.summary }}
              ></div>
            )}
          </h6>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div class="float-right right-9 hover:bg-rose-400 active:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-700 rounded-full lg:text-lg pl-3 pr-3">
        <button type="submit" value="Submit" onClick={props.onClick}>
          Back to Homepage
        </button>
      </div>
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
