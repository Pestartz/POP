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
        
        <div className={styles.playlistScreen__content__search}>
          {/* {NOMUSIC} */}
          <SearchMusic/>        
          
        </div>
        <div className={styles.playlistScreen__content__result}>
          <CardMusic/>
          <CardMusic/>
          <CardMusic/>
          <CardMusic/>
        </div>

      </div>
    );
  }
}

export default PlaylistScreen;