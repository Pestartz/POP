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
        <input 
          id={styles.searchMusic__input} 
          type="text" 
          placeholder="Search..."
          onChange={this.handleInputChange}
        />  
      </div>
    );
  }
}

export default SearchMusic;   
