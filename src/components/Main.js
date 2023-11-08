import React from 'react';
import HeroSection from './main components/HeroSection';
import Highlights from './main components/Highlights';
import Testimonials from './main components/Testimonials';
import About from './About';

function Main () {
    return (
        <main>
            <HeroSection></HeroSection>
            <Highlights></Highlights>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    )
}

export default Main;