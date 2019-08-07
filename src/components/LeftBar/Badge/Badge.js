import React, { Component } from "react";
import styles from "./Badge.scss";

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.badge}>
        <div className={styles.badge__image}  alt="" />
        <div className={styles.badge__name}> Mister Di </div>
      </div>
    );
  }
}

export default Badge;
