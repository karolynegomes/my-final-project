import React from 'react';
import BookForm from './BookForm';
import Button from './Button';

function HeroSection () {
    return (
        <section className='HeroSection'>
            <div>
                <h1 style={{color: "#F4CE14"}}>Little Lemon</h1>
                <h2 style={{color: "#EDEFEE"}}>Chicago</h2>
            </div>
            <div className='herosection'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 10}}>
                <div className='herosection-content' style={{flex:1}}>
                    <p style={{color: "#EDEFEE"}}>
                        A culinary gem in Somelocation, where freshness and flavor unite. Our vibrant menu, crafted with locally sourced ingredients, offers a delightful dining experience. From zesty salads to delectable entrees, savor the essence of modern cuisine in a charming ambiance. Unforgettable moments, one bite at a time.
                        A culinary gem in Somelocation, where freshness and flavor unite. Our vibrant menu, crafted with locally sourced ingredients, offers a delightful dining experience. From zesty salads to delectable entrees, savor the essence of modern cuisine in a charming ambiance. Unforgettable moments, one bite at a time.
                    </p>
                    <Button text={'Book a table'}></Button>
                </div >
                <img src={require('./restauranfood.jpg')} style={{maxWidth: 150, margin:50}}/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;