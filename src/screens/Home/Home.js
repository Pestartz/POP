import React, { Component } from "react";
import styles from "./Home.scss";
import LeftBar from "../../components/LeftBar/LeftBar";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.home}>
          <LeftBar/>
        </div>
    );
  }
}

export default Home;
