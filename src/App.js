import React, { Component } from 'react';
import './App.css';
import AppNav from './AppNav';
import AppFooter from './AppFooter';
import Promotion from './home/Promotion';

class App extends Component {
  render() {
    return (
        <div>
            <AppNav/>
            <Promotion/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <AppFooter/>
        </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React, Ivan</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
