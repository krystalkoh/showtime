import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Heart from "./HeartButton";
import styles from "../css/ShowInfoModal.module.css";
import HeartButton from "./HeartButton";

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
    const htmlString = props.summary;
    const plainString = htmlString.replace(/<[^>]+>/g, "");

    // console.log(props.image);
    return (
      <div class={styles.backdrop} onClick={props.okayClicked}>
        <div className={`${styles.board} ${styles.modal}`}>
          <header
            className={styles.header}
            class="grid grid-rows-3 grid-flow-col "
          >
            <img class="w-60 row-span-3" src={props.image}></img>
            <h2 class="col-span-2 text-3xl mt-20">{props.name}</h2>
            <h3 class=" row-span-2 col-span-2">
              <span class="lg"> Premiered on {data.premiered}</span>
              <br></br>
              <a class="group" href={props.officialSite}>
                <h3 class="group-hover:text-rose-400 ease-in-out">
                  Link to Official Site
                </h3>
              </a>
              <br></br>
              <h4 class="underline">Airing on</h4>
              <div>
                <h5 class="list-none "> {props.days}</h5>
                {/* <h5 class="float-right"> {props.time}</h5> */}
              </div>
              {/* <table class="table-fixed border-rose-300">
                <thead>
                  <tr>
                    <th class="w-56">Days</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="list-none w-56 text-center"> {props.days}</td>
                    <td>{props.time}</td>
                  </tr>
                </tbody>
              </table> */}
            </h3>
          </header>
          <div className={styles.content}></div>
          <h4 class="text-xl italic font-bold">Summary</h4>
          <p>{plainString}</p>
        </div>

        <footer className={styles.actions}>
          <button onClick={props.okayClicked}>Back To Homepage</button>
        </footer>
      </div>
    );
  };
  return (
    <>
      {/* //MUST RMBR TO DO CONDITIONAL RENDERING AS THE DATA MUST FINISH LOADING FIRST  */}
      {ReactDOM.createPortal(
        data && (
          <>
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
          </>
        ),
        //  {item && <HeartButton data={item} />}
        document.querySelector("#modal-root")
      )}
    </>
  );
};
export default ShowInfoModal;
