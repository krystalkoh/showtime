import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./ShowInfoModal.module.css";
// import Button from "./Button";

const ShowInfoModal = (props) => {
  const [data, setShowData] = useState("");
  const [error, setError] = useState(null);
  const showId = props.showId;
  console.log(showId);

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);

      const showData = await response.json();
      //   console.log(showData.image.medium);
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

  const Overlay = (props) => {
    console.log(props.image);
    return (
      <div className={styles.backdrop} onClick={props.okayClicked}>
        <div className={`${styles.board} ${styles.modal}`}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}></div>
          <h4>{props.name}</h4>
          <p>{props.summary}</p>
          <img src={props.image}></img>
          <p>{props.time}</p>
          <p>{props.days}</p>
          <a href={props.officialSite}>Link to Official Site</a>
          {/* //how to set link?? */}
          <a href={data.url}></a>

          <span> premiered on {data.premiered}</span>
          <a href={data.officialSite}>{/* : {data.schedule.days}{" "} */}</a>
          {/* <h4>{data.schedule.days}</h4> */}
          {/* {data.schedule.time} */}
        </div>
        <footer className={styles.actions}>
          <button onClick={props.okayClicked}>Okay</button>
        </footer>
      </div>
    );
  };
  return (
    <>
      {/* //MUST RMBR TO DO CONDITIONAL RENDERING AS THE DATA MUST FINISH LOADING FIRST  */}
      {ReactDOM.createPortal(
        data && (
          <Overlay
            name={data.name}
            summary={data.summary}
            message="message"
            image={data.image.medium}
            time={data.schedule.time}
            days={data.schedule.days.map((item) => {
              return <li>{item}</li>;
            })}
            officialSite={data.officialSite}
            okayClicked={props.okayClicked}
          />
        ),
        document.querySelector("#modal-root")
      )}
    </>
  );
};
export default ShowInfoModal;
