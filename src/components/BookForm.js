import React from "react";
import { useState } from 'react';
import Button from './Button';

function BookForm (props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");

    const handleSubmit = (e) => {
        (e.preventDefault());
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setGuests("");
        props.setAvailableTimes("");
        props.setOccasion("");
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.updateTimes(selectedDate);
      };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" value={date} onChange={handleDateChange} required/>
                    <label htmlFor="time">Time</label>
                    <select id="time" value={props.availableTimes} onChange={(e)=>props.setAvailableTimes(e.target.value)}>
                        {props.availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                            {time}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="guests">Guests</label>
                    <input id="guests" type="number" min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={props.occasion} onChange={(e)=>props.setOccasion(e.target.value)}>
                        {props.occasion.map((occasion, index) => (
                            <option key={index} value={occasion}>
                            {occasion}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input value={name} id="name" onChange={(e)=>setName(e.target.value)} required/>
                    <label htmlFor="email">Email</label>
                    <input value={email} id="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label htmlFor="phonenumber">Phone number</label>
                    <input value={phone} id="phonenumber" onChange={(e)=>setPhone(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <Button text={'Book a table'}></Button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookForm;