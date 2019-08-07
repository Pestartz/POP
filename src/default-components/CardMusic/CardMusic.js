import React, { Component } from "react";
import styles from "./CardMusic.scss";

class CardMusic extends Component {
  constructor(props) {
    super(props);
  }

  clickToAdd(){
    
  }

  render() {
    let textName=this.props.name;
    let textAuthor=this.props.author;
    let textTime=this.props.time;
    let addIcon = require("assets/images/add.svg");
    return (
      <div className={styles.cardMusic}>
        <div className={styles.cardMusic__pic}></div>
        <div className={styles.cardMusic__text}>
          <div className={styles.cardMusic__text__name}>{textName}</div>
          <div className={styles.cardMusic__text__author}>{textAuthor}</div>
        </div>
        <div className={styles.cardMusic__time}>{textTime}</div>
        <div className={styles.cardMusic__add}>
          <img src={addIcon} height="10px" width="10px"/>  
        </div>
      </div>
    );
  }
}

export default CardMusic;  