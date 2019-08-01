import React, { Component } from "react";
import styles from "./Home.scss";
import Left from "../../components/LeftBar/Leftbar";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.home}>
          <Left/>
        </div>
    );
  }
}

export default Home;
