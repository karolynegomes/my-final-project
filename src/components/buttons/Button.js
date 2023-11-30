import React from "react";


function Button (props) {

    return (
        <button aria-label="On Click" className="submit-btn" disabled={props.disabled}><b>{props.text}</b></button>
    )
}

export default Button; 