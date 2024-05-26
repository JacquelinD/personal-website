import React from "react";
import "./header.css"


const Header = () => {
    return(
        <div>
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
      </div>
    );
};

export default Header;