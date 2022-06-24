import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState("");

  const fetchPost = async (url) => {
    try {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error("something went wrong.");
      }

      const data = await response.json();
      setData(data[0].resolutions.medium.url);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(`component is mounted or rendered`);
    const url = "https://api.tvmaze.com/shows/1/images";
    fetchPost(url);
  }, []);

  return (
    <>
      <img src={data}></img>
    </>
  );
};
export default Homepage;
