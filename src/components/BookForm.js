import React from "react";
import { useState } from 'react';

function BookForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        (e.preventDefault());
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
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
                    <select id="time" onChange={(e)=>setTime(e.target.value)}>
                        <option>Select time</option>
                        <option id="">12</option>
                        <option id="">13</option>
                        <option id="">14</option>
                        <option id="">15</option>
                    </select>
                    <label htmlFor="guests">Guests</label>
                    <input id="guests" type="number" min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" onChange={(e)=>setOccasion(e.target.value)} required>
                        <option>Select occasion</option>
                        <option id="birthday">Birthday</option>
                        <option id="anniversary">Anniversary</option>
                        <option id="other">Other</option>
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
                    <button type="submit" disabled={!name || !email}>Book a table</button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookForm;