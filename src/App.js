import React, { Component } from 'react';
import logo from './logo.svg';

import styles from './App.mod.scss';


class App extends Component {
  render() {
    console.log(styles)
    return (
      <div className={styles.content}>
        <header className={styles.header}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
