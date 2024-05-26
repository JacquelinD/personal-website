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
          <li>Home</li>
          <li>Blog</li>
          <li>About Me</li>
        </ul>
          {/* Add in a hamburger here */}
      </nav>
      <header className="main-header">
        <h1 className="quote">
          Who really needs the past with the alure of something new? 
        </h1>
      </header>
      <div className="intro-container">
        About Me & Photo
      </div>
      <div className="latest-blog-container">
        Check out my latest Blog!
      </div>
      <div className="disc-container">
        Disc Widget 
      </div>
      <div className="reading-container">
        What I'm curently reading
      </div>
      {/* <Posts /> */}
      <footer>
        {/* Social links */}
        <div className="socials-container">
        <a href="" className="socails">
          <img src="" alt="FB"/>
        </a>
        <a href="">
          <img src="" alt="FB"/>
        </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
