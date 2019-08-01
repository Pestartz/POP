import React, { Component } from "react";
import styles from "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = "Search";
    let searchIcon = require("assets/images/pe.svg");
    return (
      <div className={styles.search}>
        <div className={styles.search__wrapper}>
          <img src={searchIcon} height="22px" width="22px"/>    
          <div className={styles.search__text}>{text}</div>
        </div>
      </div>
    );
  }
}

export default Search;