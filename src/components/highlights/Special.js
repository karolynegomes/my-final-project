import React from "react";

function Special (props) {
    return (
        <section style={{display: 'flex', flexDirection: 'column', backgroundColor: '#495e5743', borderRadius: 8, margin: 15}}>
            <div>
            <img className="special-photo" style={{maxWidth: 250, minWidth: 250, borderRadius: 8}} alt="special dish" src={props.image}></img>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidht:250, maxWidth:250, minHeight:30, maxHeight:30}}>
                <h3 className="h3-special">{props.name}</h3>
                <p style={{fontSize: 14, color: '#495E57', backgroundColor: '#FBDABB', padding: 3, borderRadius: 4}}><b>{props.price}</b></p>
            </div>
            <p style={{fontSize: 15, marginLeft: 25, color: '#333333', minWidht:150, maxWidth:150}}>{props.description}</p>
        </section>
    )
}

export default Special;