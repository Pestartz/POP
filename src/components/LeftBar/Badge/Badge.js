import React, { Component } from "react";
import styles from "./Badge.scss";

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="badge">
        <img className="badge__image" src={currentBadge} alt="" />
        <div className="badge__name"> {this.props.name} </div>
      </div>
    );
  }
}

export default Badge;
