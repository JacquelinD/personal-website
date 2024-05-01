import React from 'react';
import './App.css';

import Posts from "./components/Posts";

// const mode = {
//   cute: {background: '#F3EAD6', 
//          text: '#A66d45', 
//          headings: '#F6B6A7', 
//          links: '#FD9584', 
//          misc: '#A7A155', 
//          misc2: '#D2C98A'}
// }

function App() {
  return (
    <div className="main-container">
      <nav className="main-nav">
        <ul>
          <li>Test 1</li>
          <li>Link 1</li>
          <li>Link to about me page</li>
        </ul>
          {/* Add in a hamburger here */}
      </nav>
      <header className="main-header">
        <h1>
          Blog App using React JS
        </h1>
      </header>
      <Posts />
      <footer>
        {/* Social links */}
      </footer>
    </div>
  );
}

export default App;
