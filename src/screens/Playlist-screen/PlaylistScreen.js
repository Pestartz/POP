import React, { Component } from "react";
import SearchMusic from "../../components/default-components/SearchMusic/SearchMusic"
import styles from "./PlaylistScreen.scss";
class PlaylistScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.playlistScreen}>
          <SearchMusic/>
        </div>
    );
  }
}

export default PlaylistScreen;