import React from 'react';
import Review from './Review';
import CustomerPhoto from './customerprofile.png';

function Testimonials () {
    return (
        <div className='Testimonials'>
            <div>
                <h1 style={{color: "#EDEFEE", fontSize: 25}}>Testimonials</h1>
            </div>
            <div className='Review'>
                <Review rating={'4/5'} name={'Pedro'} img={CustomerPhoto} review={'I love this restaurant. The food is always fresh.'}></Review>
                <Review rating={'5/5'} name={'Maria'} img={CustomerPhoto} review={'Perfect option for people who likes healthy food.'}></Review>
                <Review rating={'4/5'} name={'Carmen'} img={CustomerPhoto} review={'I love this restaurant. Their burgers are amazing.'}></Review>
            </div>
        </div>
    )
}

export default Testimonials;