import React, { Component } from "react";
import Badge from "./Badge/Badge";
import Search from "./Search/Search";
import Playlist from "./Playlist/Playlist";
import Chart from "./Charts/Chart";
import styles from "./LeftBar.scss";

class LeftBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.leftbar}>
          <Badge/>
          <div className={styles.leftbar__under}>
            <Search/>
            <Playlist/>
            <Chart/>
          </div>
        </div>
    );
  }
}

export default LeftBar;
