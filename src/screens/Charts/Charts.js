import React, { Component } from "react";
import CardMusic from "../../default-components/CardMusic/CardMusic";
import styles from "./Charts.scss";

const TASKS = [
  {
    id: 0,
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

class Charts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  const text = "Charts";
  const countSongs = "5 songs";
  const chartIcon = require("assets/images/Charts.svg");
    return (
      <div className={styles.charts}>
        <div className={styles.charts__text}>
          <div className={styles.charts__text__left}>
            <div className={styles.charts__text__left__top}>{text}</div>
            <div className={styles.charts__text__left__under}>{countSongs}</div>
          </div>
          <img src={chartIcon} className={styles.charts__text__right} height="22px" width="22px"/> 
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

export default Charts;
