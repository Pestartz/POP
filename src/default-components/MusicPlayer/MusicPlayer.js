import React, { Component } from "react";
import CardMusic from "../CardMusic/CardMusic";
import styles from "./MusicPlayer.scss";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
  }

  clickToAdd(){
    
  }

  render() {
    let author="AC/DC";
    let name="assets/images/next.svg";
    let time="3:23";
    let btnNextPrev = require("assets/images/next.svg");
    let btnMain = require("assets/images/start.svg");
    return (
      <div className={styles.musicPlayer}>
        <div className={styles.musicPlayer__card}>
          <div className={styles.musicPlayer__pic}></div>
            <div className={styles.musicPlayer__text}>
              <div className={styles.musicPlayer__text__name}>{name}</div>
              <div className={styles.musicPlayer__text__author}>{author}</div>
            </div>
        </div>

        <div className={styles.musicPlayer__btns}> 
          <div className={styles.musicPlayer__btns__prev}> <img src={btnNextPrev}/> </div>
          <div className={styles.musicPlayer__btns__main}> <img src={btnMain}/> </div>
          <div className={styles.musicPlayer__btns__next}> <img src={btnNextPrev}/> </div>  
        </div> 

        <div className={styles.musicPlayer__volume}> </div>

      </div>
    );
  }
}

export default MusicPlayer;  

