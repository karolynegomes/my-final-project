import React from "react";
import { useState, useRef } from 'react';
import Button from './Button';

function BookForm (props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const selectRefTime = useRef(null);
    const selectRefOccasion = useRef(null);


    const handleSubmit = (e) => {
        (e.preventDefault());
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setGuests("");
        selectRefTime.current.value = "Caca";
        selectRefOccasion.current.value = "Culo";
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.updateTimes(selectedDate);
      };


    return(
        <div id="reservations" className="reservations" style={{display: 'flex', justifyContent: 'center'}}>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <h2 style={{display: 'flex', justifyContent: 'center', color: '#495E57'}}>Reservations</h2>
                <fieldset>
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" value={date} onChange={handleDateChange} required/>
                    <label htmlFor="time">Time </label>
                        <select id="time" ref={selectRefTime}>
                             {props.availableTimes.map((availableTime) => (
                                <option value={availableTime}>{availableTime}</option>
                            ))}
                        </select>
                    <label htmlFor="guests">Guests</label>
                    <input id="guests" type="number" min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
                    <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" ref={selectRefOccasion}>
                             {props.occasion.map((occasion) => (
                                <option value={occasion}>{occasion}</option>
                            ))}
                        </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input value={name} id="name" onChange={(e)=>setName(e.target.value)} required/>
                    <label htmlFor="email">Email</label>
                    <input type="mail" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label htmlFor="phonenumber">Phone number</label>
                    <input value={phone} id="phonenumber" onChange={(e)=>setPhone(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <Button text={'Book a table'} onClick={handleSubmit}></Button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookForm;