import React, { Component } from "react";
import styles from "./SearchMusic.scss";
class SearchMusic extends Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = () => {

  }

  render() {
    return (
        <div className={styles.searchMusic}>
          {/* <label for="inp" className={styles.inp}>
            <input type="text" id="inp" placeholder="&nbsp;"/>
            <span className={styles.label}>Label</span>
            <span className={styles.border}></span>
          </label> */}
        </div>
    );
  }
}

export default SearchMusic;   
 {/* <input 
            type="text" 
            id="filter" 
            placeholder="Search for..." 
            onChange={this.handleInputChange}
          /> */}