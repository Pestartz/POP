import React, { Component } from "react";
import SearchMusic from "../../default-components/SearchMusic/SearchMusic";
import CardMusic from "../../default-components/CardMusic/CardMusic";
// import { connect } from "react-redux";
import styles from "./Search.scss";
// import uuid from "uuid";
// import { getSongs } from "../../redux/actions/listSongs"; 
// import PropTypes from "prop-types";

const TASKS = [
      {
        id: 0,
        text1: "Bingo",
        time: "2:21",
        text2: "AC/DC",
      },
      {
        id: 3,
        text1: "Bingo",
        text2: "AC/DC",
        time: "5:43"
      },
      {
        id: 4,
        text1: "Bingo",
        text2: "AC/DC",
        time: "3:23"
      }
      ,
      {
        id: 45,
        text1: "Bingo",
        text2: "AC/DC",
        time: "3:23"
      }
      ,
      {
        id: 32,
        text1: "Bingo",
        text2: "AC/DC",
        time: "3:23"
      }
      ,
      {
        id: 5,
        text1: "Bingo",
        text2: "AC/DC",
        time: "3:23"
      }
  ];

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.search}>
        <div className={styles.search__content__search}>
          <SearchMusic/>        
        </div> 
        <div className={styles.search__content__result}>
          {(TASKS.map(({id,text1,text2,time}) =>
            <CardMusic
              key={id}
              author={text2}
              name={text1} 
              time={time}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
