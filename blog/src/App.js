import React from 'react';
import './App.css';

import Posts from "./components/Posts";

const mode = {
  cute: {background: '#F3EAD6', 
         text: '#A66d45', 
         headings: '#F6B6A7', 
         links: '#FD9584', 
         misc: '#A7A155', 
         misc2: '#D2C98A'}
}

function App() {
  const style = mode[0]
  return (
    <div className="main-container" style={style}>
      {/* <script src="../public/colorTheme.js" />
      <style jsx global>
        {`
        .fun-theme{
          --headings: #D2C98A;
          --text: #A66D45;
          --link: #FD9584;
        }
        `}
        </style> */}
      <header className="App-header">
        <nav>
        </nav>
        <h1 className="main-header">
          Blog App using React JS
          your preference is {style}
        </h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
