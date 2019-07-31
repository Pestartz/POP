import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./App.scss";


class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
        <div className={styles.app}>
          
        </div>
    );
  }
}

export default App;
