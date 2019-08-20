import React, { Component } from "react";
import styles from "./Home.scss";
import LeftBar from "../../components/LeftBar/LeftBar";
import PlaylistScreen from "../Playlist-screen/PlaylistScreen";
import MusicPlayer from "../../default-components/MusicPlayer/MusicPlayer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.home}>
        <div className={styles.home__content}>
          <LeftBar/>
          <PlaylistScreen/>
        </div>
        
        <div className={styles.home__player}/> 
        <MusicPlayer/>
      </div>
    );
  }
}

export default Home;
