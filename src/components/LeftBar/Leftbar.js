import React, { Component } from "react";
import Badge from "./Badge";
import styles from "./Leftbar.scss";

class Leftbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.leftbar}>
          <Badge/>
        </div>
    );
  }
}

export default Leftbar;
