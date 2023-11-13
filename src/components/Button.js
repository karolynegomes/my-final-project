import React from "react";

function Button (props) {
    return (
        <button style={{borderRadius: 4, backgroundColor: '#F4CE14', fontFamily: 'sans-serif', color: '#333333', maxHeight: 21, minHeight: 21, maxWidth: 110, minWidth: 110, margin:20}}><b>{props.text}</b></button>
    )
}

export default Button;