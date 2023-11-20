import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import BookForm from './BookForm';
import { useState, useReducer } from 'react';

function Main () {

    function updateTimes ()  {
        return ({availableTimes})
    }

    function initializeTimes () {
        return ({availableTimes} = '')
    }

    const [state, dispatch] = useReducer(updateTimes, initializeTimes)

    const availableTimes = [
        'Click to select a time',
        '12:00 - 13:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
        '19:00 - 20:00',
        '20:00 - 21:00',
        '21:00 - 22:00',
        '22:00 - 23:00'
      ];

    const occasion = [
        'Click to select an occasion',
        'Birthday',
        'Anniversary',
        'Engagement',
        'Other',

      ];


    return (
        <main>
            <HeroSection></HeroSection>
            <Highlights></Highlights>
            <BookForm updateTimes={updateTimes} occasion={occasion} availableTimes={availableTimes}></BookForm>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    )
}

export default Main;