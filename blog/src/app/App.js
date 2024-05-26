import React from 'react';
import './App.css';

// import Posts from "./components/posts/Posts";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Preview from './components/preview/preview';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Preview />
      {/* <Posts /> */}
      <Footer />
    </div>
  );
}

export default App;
