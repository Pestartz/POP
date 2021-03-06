import React, { Component } from "react";
import styles from "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = "Search";
    const searchIcon = require("assets/images/Search.svg");
    return (
      <div className={styles.search__wrapper}>
        <div className={styles.search}>
          <img src={searchIcon} height="22px" width="22px"/>    
          <div className={styles.search__text}>{text}</div>
        </div>
      </div>
    );
  }
}

export default Search;