import React from "react";
import BookForm from './BookForm';

function Reservations () {
    return (
        <section className="reservations">
            <div className="form-div">
                <h2 style={{color: '#495E57'}}>Reservations</h2>
                <BookForm></BookForm>
            </div>
        </section>
    )
}

export default Reservations;