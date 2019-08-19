import React, { Component } from "react";
import styles from "./MusicPlayer.scss";
// this.state = {
    //   loaded: false,
    //   duration: 0,
    //   current: 0,
    //   play: false,
    //   error: false,
    //   name: "",
    //   author: "",
    //   source: "",
    // };
class MusicPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      duration: 0,
      current: 0,
      play: false,

    };
    this.btnRef = React.createRef();
    this.plady = this.plady.bind(this);
  } 

  plady(){
    if (this.state.play) {
      this.setState({ play: false });
      this.btnRef.current.pause();
    } else {
      this.setState({ play: true });
      this.btnRef.current.play();
    }
  }

  render() {
    const { play } = this.state;

    const author="AC/DC";
    const name="Highway to Hell";
    const btnNextPrev = require("assets/images/next.svg");
    let btnMain;
    
    if(play===false){
      btnMain = require("assets/images/start.svg");
    }else{
      btnMain = require("assets/images/pause-bars.svg");
    }
    
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
          <div className={styles.musicPlayer__btns__main} onClick={this.plady}  > 
            <img className={styles.musicPlayer__btns__main__pic} height="35px" width="35px" src={btnMain}/> 
          </div>
          <div className={styles.musicPlayer__btns__next}> <img src={btnNextPrev}/> </div>  
        </div> 

        <div className={styles.musicPlayer__volume}>
          <div style={{ height: "3px" , width: 54 + "%" , background: "#4642BF"}}></div>
        </div>
   
        <audio src={"https://r.mradx.net/r/kFYyZFlTGb6IEbXVjgY_N8JdEA0HqxEo.mp3"} ref={this.btnRef}></audio>

      </div>
    );
  }
}

export default MusicPlayer;  

