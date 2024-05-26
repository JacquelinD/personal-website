import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//pages
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';


//components
import Navbar from './components/header/navbar';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
