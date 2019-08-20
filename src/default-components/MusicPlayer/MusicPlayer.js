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


  componentDidMount() {
    this.btnRef.addEventListener("timeupdate", () => {
      let ratio = this.btnRef.currentTime / this.btnRef.duration;
      let position = this.timeline.offsetWidth * ratio;
      this.positionHandle(position);
    });
  }

  positionHandle = (position) => {
    let timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
    }
  };

  mouseMove = (e) => {
    this.positionHandle(e.pageX);
    // eslint-disable-next-line no-extra-parens
    this.btnRef.currentTime = (e.pageX / this.timeline.offsetWidth) * this.btnRef.duration;
  };

  mouseUp = () => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = () => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };


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

        <div className={styles.musicPlayer__volume} onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
          <div className={styles.musicPlayer__volume__handle}  onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }}></div>
        </div>
   
        <audio src={"https://r.mradx.net/r/kFYyZFlTGb6IEbXVjgY_N8JdEA0HqxEo.mp3"} ref={this.btnRef}></audio>

      </div>
    );
  }
}

export default MusicPlayer;  

