import React, { Component } from "react";
import styles from "./Badge.scss";

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const d='http://wallpapersfan.ru/wp-content/uploads/2016/11/besplatnye-oboi-hd-zheleznyj-chelovek-760x475.jpg';
    return (
      <div className={styles.badge}>
        <div className={styles.badge__image}  alt="" />
        <div className={styles.badge__name}> Mister Di </div>
      </div>
    );
  }
}

export default Badge;
