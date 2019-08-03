import React, { Component } from "react";
import styles from "./CardMusicText.scss";

class CardMusicText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let NameMusic="O fortuna";
    let NameAuthor="Jay-z";
    return (
      <div className={styles.cardMusicText}>
        <p className={styles.cardMusicText__name}>{NameMusic}</p>
        <p className={styles.cardMusicText__author}>{NameAuthor}</p>
      </div>
    );
  }
}

export default CardMusicText;  