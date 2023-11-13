import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import BookForm from './BookForm';
import { useState } from 'react';

function Main () {

    const [availableTimes, setAvailableTimes] = useState([
        'Click to select a time',
        '12:00-13:00',
        '13:00-14:00',
        '14:00-15:00',
        '15:00-16:00',
        '19:00-20:00',
        '20:00-21:00',
        '21:00-22:00',
        '22:00-23:00'
      ]);

      const [occasion, setOccasion] = useState([
        'Click to select an occasion',
        'Birthday',
        'Anniversary',
        'Engagement',
        'Other',

    ]);

    return (
        <main>
            <HeroSection></HeroSection>
            <Highlights></Highlights>
            <BookForm occasion={occasion} setOccasion={setOccasion} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}></BookForm>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    )
}

export default Main;