import React, { Component } from "react";
import SearchMusic from "../../components/default-components/SearchMusic/SearchMusic";
import CardMusic from "../../components/default-components/CardMusic/CardMusic";
import styles from "./PlaylistScreen.scss";

class PlaylistScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NOMUSIC="Empty";
    return (
      <div className={styles.playlistScreen}>   
        <SearchMusic/>
        {/* <div className={styles.playlistScreen__content}>
          {NOMUSIC}
        </div> */}
        <CardMusic/>
      </div>
    );
  }
}

export default PlaylistScreen;