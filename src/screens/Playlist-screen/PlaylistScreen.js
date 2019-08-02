import React, { Component } from "react";
import styles from "./PlaylistScreen.scss";
class PlaylistScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.playlistScreen}>
          <LeftBar/>
        </div>
    );
  }
}

export default PlaylistScreen;