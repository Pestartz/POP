import React, { Component } from "react";
import NextBtn from "./NextBtn/NextBtn";
import PlayPause from "./PlayPause/PlayPause";
import Mute from "./Mute/Mute";
import styles from "./MusicPlayer.scss";


class MusicPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      duration: 0,
      current: 0,
      progress: 0,
      play: false,
      mute: false,
      text: "Highway to Hell",
      author: "AC/DC",
      source: "http://claymore.france.free.fr/momo/summer%20love.mp3",
    };
 
    this.btnRef = React.createRef();
    this.playPause = this.playPause.bind(this);
    this.mute = this.mute.bind(this);
  } 

  componentDidMount() {
    this.btnRef.current.addEventListener("timeupdate", () => {
      let duration =this.btnRef.current.duration;
      let currentTime = this.btnRef.current.currentTime;
  
      let ratio = currentTime / duration;
      let position = this.timeline.offsetWidth * ratio;

      this.setState({ progress: currentTime, duration: duration });
      this.positionHandle(position);
    });
  }

  positionHandle = (position) => {
    this.handle.style.width = position + "px";
    if (position < 0) {
      this.handle.style.marginLeft = "0px";
    }
  };

  formatTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration % 60);
    return minutes + ":" + (seconds > 9 ? seconds : "0" + seconds);
  }

  mouseMove = (e) => {
    let width = this.timeline.offsetWidth;
    let rect = this.timeline.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let duration = this.btnRef.current.duration;
    let currentTime = duration * offsetX / width;

    this.btnRef.current.currentTime = currentTime;
    this.setState({ progress: currentTime });
  
  };

  mouseUp = () => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = () => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };

  mute = () => {
    if(this.state.mute === true) {
      this.setState({ mute: false })
      this.btnRef.current.volume = 1;
    } else {
      this.setState({ mute: true })
      this.btnRef.current.volume = 0;
    }
  }
  
  playPause = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.btnRef.current.pause();
    } else {
      this.setState({ play: true });
      this.btnRef.current.play();
    }
  }

  render() {
    const { author, text, source } = this.state;
    
    return (
      <div className={styles.musicPlayer}>
        <div className={styles.musicPlayer__card}>
          <div className={styles.musicPlayer__pic}></div>
            <div className={styles.musicPlayer__text}>
              <div className={styles.musicPlayer__text__name}>{text}</div>
              <div className={styles.musicPlayer__text__author}>{author}</div>
            </div>
        </div>

        <div className={styles.musicPlayer__btns}> 
          <div className={styles.musicPlayer__btns__prev}> <NextBtn/> </div>
          <div className={styles.musicPlayer__btns__main} onClick={this.playPause}  > 
            <PlayPause  play={this.state.play}/>
          </div>
          <div className={styles.musicPlayer__btns__next}> <NextBtn/> </div>  
        </div> 

        <div className={styles.musicPlayer__duration} onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
          <div className={styles.musicPlayer__duration__handle} onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }}></div>
        </div>

        <div className={styles.musicPlayer__time}>
          {this.formatTime(this.state.progress) + "/" + this.formatTime(this.state.duration)}
        </div>

        <div className={styles.musicPlayer__volume} onClick={this.mute}>
          <Mute mute={this.state.mute}/>
        </div>

        <audio src={"http://claymore.france.free.fr/momo/summer%20love.mp3"} ref={this.btnRef}></audio>

      </div>
    );
  }
}

export default MusicPlayer;  

