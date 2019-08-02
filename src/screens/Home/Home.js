import React, { Component } from "react";
import styles from "./Home.scss";
import LeftBar from "../../components/LeftBar/LeftBar";
import PlaylistScreen from "../Playlist-screen/PlaylistScreen";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.home}>
          <LeftBar/>
          <PlaylistScreen/>
        </div>
    );
  }
}

export default Home;
