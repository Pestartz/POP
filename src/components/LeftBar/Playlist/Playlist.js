import React, { Component } from "react";
import styles from "./Playlist.scss";

class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = "Playlists";
    let playlistsIcon = require("assets/images/pb.svg");
    return (
      <div className={styles.playlist__wrapper}>
        <div className={styles.playlist}>
          <img src={playlistsIcon} height="22px" width="22px"/>    
          <div className={styles.playlist__text}>{text}</div>      
        </div>
      </div>
    );
  }
}

export default Playlist;