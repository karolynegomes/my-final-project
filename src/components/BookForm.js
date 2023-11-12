import React from "react";
import { useState } from 'react';
import Button from './Button';

function BookForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState([
        'Select an occasion',
        'Birthday',
        'Anniversary',
        'Engagement',
        'Other',
    ]);

    const [availableTimes, setAvailableTimes] = useState([
        'Select a time',
        '12:00-13:00',
        '13:00-14:00',
        '14:00-15:00',
        '15:00-16:00',
        '19:00-20:00',
        '20:00-21:00',
        '21:00-22:00',
        '22:00-23:00'
      ]);

    const handleSubmit = (e) => {
        (e.preventDefault());
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setAvailableTimes("");
        setGuests("");
        setOccasion("");
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h3>Reservation details</h3>
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" value={date} onChange={(e)=>setDate(e.target.value)} required/>
                    <label htmlFor="time">Time</label>
                    <select id="time" value={availableTimes} onChange={(e)=>setAvailableTimes(e.target.value)}>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                            {time}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="guests">Guests</label>
                    <input id="guests" type="number" min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                        {occasion.map((occasion, index) => (
                            <option key={index} value={occasion}>
                            {occasion}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <fieldset>
                    <h3>Customer details</h3>
                    <label htmlFor="name">Name:</label>
                    <input value={name} id="name" onChange={(e)=>setName(e.target.value)} required/>
                    <label htmlFor="email">Email:</label>
                    <input value={email} id="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label htmlFor="phonenumber">Phone number:</label>
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