import React, { Component } from "react";
import styles from "./Home.scss";
import LeftBar from "../../components/LeftBar/LeftBar";
import PlaylistScreen from "../Playlist-screen/PlaylistScreen";
import MusicPlayer from "../../default-components/MusicPlayer/MusicPlayer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const content = this.props.children;
    return (
      <div className={styles.home}>
        <LeftBar/>
        <MusicPlayer/>
        {content}
      </div>
    );
  }
}

export default Home;
    {/* <PlaylistScreen/> */}