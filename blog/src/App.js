import logo from './logo.svg';
import React from 'react';
import './App.css';

import Posts from "./components/Posts";

function App() {
  return (
    <div className="main-container">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1 className="main-header">
          Blog App using React JS
        </h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
