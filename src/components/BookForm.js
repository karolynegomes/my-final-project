import React from "react";
import { useState, useEffect } from 'react';
import Button from './Button';

function BookForm (props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [times, setTimes] = useState("");
    const [occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        (e.preventDefault());
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setGuests("");
        setOccasion("");
        setTimes("");
        alert("Your reservation has been registered.");
    }

    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
      };

    return(
        <section id="reservations" className="reservations" style={{display: 'flex', justifyContent: 'center'}}>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <h2 style={{display: 'flex', justifyContent: 'center', color: '#495E57'}}>Reservations</h2>
                <fieldset>
                    <label htmlFor="date">Date <b style={{color: "red"}}>*</b></label>
                    <input id="date" type="date" value={date} onChange={(e)=>handleDateChange(e.target.value)} required/>
                    <label htmlFor="time">Time <b style={{color: "red"}}>*</b></label>
                        <select id="time" value={times} onChange={(e)=>setTimes(e.target.value)} required>
                            <option value="">Click to select occasion</option>
                             {props.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                        </select>
                    <label htmlFor="guests">Guests <b style={{color: "red"}}>*</b></label>
                    <input id="guests" type="number" min={1} max={12} value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
                    <label htmlFor="occasion">Occasion <b style={{color: "red"}}>*</b></label>
                        <select id="occasion" key={occasion} value={occasion} onChange={(e)=>setOccasion(e.target.value)} required>
                            <option value="">Click to select time</option>
                            {props.occasion.map(occasion => {return <option key={occasion}>{occasion}</option>})}
                        </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="name">Full name <b style={{color: "red"}}>*</b></label>
                    <input value={name} id="name" onChange={(e)=>setName(e.target.value)} required/>
                    <label htmlFor="email">Email <b style={{color: "red"}}>*</b></label>
                    <input type="email" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label htmlFor="phonenumber">Phone number</label>
                    <input type="text" pattern="[0-9]*" value={phone} id="phonenumber" onChange={(e)=>setPhone(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <Button id="submit-button" text={'Book a table'} onSubmit={handleSubmit} disabled={!date || !times || !guests ||!occasion || !name || !email}></Button>
                </fieldset>
            </form>
        </section>
    )
}

export default BookForm;