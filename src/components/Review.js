import React from 'react';

function Review (props) {
    return (
        <section className='Testimonials'>
            <div style={{display: 'flex', flexDirection: 'column', backgroundColor:'#EDEFEE', borderRadius:8, maxWidth: 170, minWidth: 170, maxHeight: 210, minHeight: 210, margin: 30}}>
                <p style={{fontSize: 25, color:'#EE9972', display: 'flex', justifyContent: 'center', margin: 10}}><b>{props.rating} ★</b></p>
                <div style={{display: 'flex', justifyContent: 'space-evenly', margin: 10}}>
                    <img src={props.img} style={{maxWidth:50}}></img>
                    <p style={{fontSize: 15, margin: 15, color: '#333333'}}><b>{props.name}</b></p>
                </div>
                <p style={{fontSize: 15, margin: 15, color: '#333333'}}>{props.review}</p>
            </div>
        </section>
    )
}

export default Review;