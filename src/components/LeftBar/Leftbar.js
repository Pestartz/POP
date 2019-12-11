import React, { Component } from "react";
import Badge from "./Badge/Badge";
import Search from "./Search/Search";
import Playlist from "./Playlist/Playlist";
import Chart from "./Charts/Chart";
import { Link } from "react-router-dom";
import styles from "./LeftBar.scss";

const ss ={
  textDecoration: "none",
};

class LeftBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.leftbar}>
        <Badge/>
        <div className={styles.leftbar__under}>
          <Link style={ss} to="/"><Search/></Link>
          <Link style={ss} to="/playlist"><Playlist/></Link>
          <Link style={ss} to="/charts"><Chart/></Link>
        </div>
      </div>  
    );
  }
}

export default LeftBar;
