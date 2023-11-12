import React from "react";
import BookForm from './BookForm';

function Reservations () {
    return (
        <section className="reservations">
            <div>
                <h1>Little Lemon</h1>
                <h2>Reservations</h2>
                <BookForm></BookForm>
            </div>
        </section>
    )
}

export default Reservations;