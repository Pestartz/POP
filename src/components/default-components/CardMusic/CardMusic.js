import React, { Component } from "react";
import CardMusicPic from "./CardMusicPic/CardMusicPic";
import CardMusicText from "./CardMusicText/CardMusicText";
import styles from "./CardMusic.scss";

class CardMusic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.cardMusic}>
        <CardMusicPic/>
        <CardMusicText/>
      </div>
    );
  }
}

export default CardMusic;  