import React, { useEffect, useState } from "react";

const ShowInfo = (props) => {
  const [data, setShowData] = useState("");
  const [error, setError] = useState(null);
  const showId = props.showId;
  console.log(showId);

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);

      const showData = await response.json();
      setShowData(showData);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    console.log(`show info`);
    // console.log(props.showId);
    fetchPost();
  }, [showId]);

  return (
    <div>
      <h4>Name = {data.name}</h4>
    </div>
  );
};

export default ShowInfo;
