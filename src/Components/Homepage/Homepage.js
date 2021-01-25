import React from 'react';
import About from './About/About';
import Brands from './Brands/Brands';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Team from './Team/Team';

const Homepage = () => {
    return (
        <div>
            <Hero/>
            <Brands/>
            <About/>
            <Team/>
            <Footer/>
        </div>
    );
};

export default Homepage;