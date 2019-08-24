/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";

const PlayPause = (props) => {
  return(
    props.play? 
    <svg version="1.1" id="Capa_1" width="35px" height="35px" viewBox="0 0 353.562 353.562" >
			<path d="M41.064,353.562h87.014V0H41.064V353.562z" fill= "rgba(128, 128, 128, 0.4)"/>
			<path d="M203.482,0v353.562h87.017V0H203.482z" fill= "rgba(128, 128, 128, 0.4)"/>
    </svg>
    :
    <svg version="1.1" id="Capa_1" width="35px" height="35px" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16" >
	    <path d="M3,16l10-8L3,0V16z"  fill= "rgba(128, 128, 128, 0.4)"/>
    </svg>
  );
};

export default PlayPause;