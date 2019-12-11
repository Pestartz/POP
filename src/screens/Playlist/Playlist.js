import React, { Component } from "react";
import CardMusic from "../../default-components/CardMusic/CardMusic";
import styles from "./Playlist.scss";

const TASKS = [
  {
    id: 1,
    text1: "Bingo",
    time: "2:21",
    text2: "AC/DC",
  },
  {
    id: 3,
    text1: "Bingo",
    text2: "AC/DC",
    time: "5:43"
  },
  {
    id: 4,
    text1: "Bingo",
    text2: "AC/DC",
    time: "3:23"
  }
  ,
  {
    id: 45,
    text1: "Bingo",
    text2: "AC/DC",
    time: "3:23"
  }
  ,
  {
    id: 32,
    text1: "Bingo",
    text2: "AC/DC",
    time: "3:23"
  }
  ,
  {
    id: 5,
    text1: "Bingo",
    text2: "AC/DC",
    time: "3:23"
  }

];

class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  const text = "Playlist";
  const countSongs = "5 songs";
  const shuffleIcon = require("assets/images/shuffle.svg");
    return (
      <div className={styles.playlist}>
        <div className={styles.playlist__text}>
          <div className={styles.playlist__text__left}>
            <div className={styles.playlist__text__left__top}>{text}</div>
            <div className={styles.playlist__text__left__under}>{countSongs}</div>
          </div>
          <img src={shuffleIcon} className={styles.playlist__text__right} height="22px" width="22px"/> 
        </div>

        {(TASKS.map(({id,text1,text2,time})=>
            <CardMusic
              key={id}
              author={text2}
              name={text1} 
              time={time}
            />
          ))}

      </div>
    );
  }
}

export default Playlist;
