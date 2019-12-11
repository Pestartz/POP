import React, { Component } from "react";
import styles from "./Chart.scss";

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = "Charts";
    let chartIcon = require("assets/images/Chart.svg");
    return (
      <div className={styles.chart__wrapper}>
        <div className={styles.chart}>
          <img src={chartIcon} height="22px" width="22px"/>    
          <div className={styles.chart__text}>{text}</div>      
        </div>
      </div>
    );
  }
}

export default Chart;