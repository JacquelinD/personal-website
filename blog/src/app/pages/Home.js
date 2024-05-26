import React from 'react';
// import Posts from "./components/posts/Posts";
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Preview from '../components/preview/preview';

const Home = () => {
    return(
        <div>
            <Header />
            <Preview />
            {/* <Posts /> */}
            <Footer />
        </div>
    );
};

export default Home;