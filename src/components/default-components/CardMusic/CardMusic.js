import React, { Component } from "react";
import styles from "./CardMusic.scss";

class CardMusic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.cardMusic}>
        <div className={styles.cardMusic__pic}></div>
        <div className={styles.cardMusic__text}>
          <div className={styles.cardMusic__text__name}>Sakura</div>
          <div className={styles.cardMusic__text__author}>Lokddddd</div>
        </div>
        <div className={styles.cardMusic__time}>3:12</div>
      </div>
    );
  }
}

export default CardMusic;  