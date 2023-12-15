import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './highlights/Highlights';
import Testimonials from './testimonials/Testimonials';
import About from './About';
import BookForm from './form/BookForm';
import { useReducer } from 'react';
import ScrollButton from './buttons/ScrollButton';
import { Element } from 'react-scroll';
import { useNavigate } from "react-router-dom"


function Main () {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;

    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }
/*
    const availableTimes = [
        '12:00 - 13:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
        '19:00 - 20:00',
        '20:00 - 21:00',
        '21:00 - 22:00',
        '22:00 - 23:00'
      ];*/

    const occasion = [
        'Birthday',
        'Anniversary',
        'Engagement',
        'Other',
      ];


    return (
        <main>
            <Element name="#herosection"><HeroSection><ScrollButton target="bookform" text="Scroll to BookForm" /></HeroSection></Element>
            <Highlights></Highlights>
            <Element name="#reservations"><BookForm occasion={occasion} availableTimes={state} dispatch={dispatch} submitForm={submitForm}></BookForm></Element>
            <Element name="#testimonials"><Testimonials></Testimonials></Element>
            <Element name="#about"><About></About></Element>
        </main>
    )
}

export default Main;