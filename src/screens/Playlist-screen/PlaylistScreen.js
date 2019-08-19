import React, { Component } from "react";
import SearchMusic from "../../default-components/SearchMusic/SearchMusic";
import MusicPlayer from "../../default-components/MusicPlayer/MusicPlayer";
import styles from "./PlaylistScreen.scss";

const TASKS = [
      {
        id: 1,
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
    ];

class PlaylistScreen extends Component {
  constructor(props) {
    super(props);

   
  }



  render() {
    var songs = [
      {
        url: 'path/to/mp3',
        cover: 'path/to/jpeg',
        artist: {
          name: 'Metallica',
          song: 'Fuel'
        }
      },
      {
        url: 'path/to/your/mp3',
        artist: {
          name: 'X Japan',
          song: 'Art of Life'
        }
      }
    ];

    return (
      <div className={styles.playlistScreen}>

        {/* <div className={styles.playlistScreen__content__search}>
          <SearchMusic/>        
          
        </div>

        <div className={styles.playlistScreen__content__result}>
          {(TASKS.map(({id,text1,text2,time})=>
            <CardMusic
              key={id}
              author={text2}
              name={text1} 
              time={time}
            />
          ))}
        </div> */}

        

      </div>
    );
  }
}

export default PlaylistScreen;