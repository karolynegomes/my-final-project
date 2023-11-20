import React from "react";

function Special (props) {
    return (
        <section style={{display: 'flex', flexDirection: 'column', backgroundColor: '#495e5743', borderRadius: 8, maxWidth: 270, margin: 15}}>
            {/*<img style={{display: 'flex', minWidth: 256, maxWidth: 256, minHeight: 172, maxHeight: 172, margin: 7, borderRadius: 8}} src={props.image}></img>*/}
            <div>
            <img className="special-photo" src={props.image} style={{maxWidth:255, margin: 7}}></img>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 style={{fontFamily: 'sans-serif', margin: 7, color: '#333333'}}>{props.name}</h3>
                <p style={{fontSize: 15, margin: 7, color: '#EE9972', textShadow: 'red'}}><b>{props.price}</b></p>
            </div>
            <p style={{fontSize: 15, margin: 15, color: '#333333'}}>{props.description}</p>
        </section>
    )
}

export default Special;