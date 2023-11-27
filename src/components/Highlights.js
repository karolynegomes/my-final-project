import React from 'react';
import Button from './Button';
import GreekSalad from './photos/greek salad.jpg'
import Bruchetta from './photos/bruchetta.jpg'
import LemmonDessert from './photos/lemon dessert.jpg'
import Special from "./Special";

function Highlights () {
    return (
        <section className='Highlights'>
                <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h1 style={{color: "#495E57", fontSize: 25}}>Specials</h1>
                </section>
                <section className="special">
                    <Special image={GreekSalad} name={'Greek salad'} price={'12.99€'} description={'This is the special description. This is a very special dish. It has fresh ingredients.'}></Special>
                    <Special image={Bruchetta} name={'Bruchetta'} price={'17.99€'} description={'This is the special description. This is a very special dish. It has fresh ingredients.'}></Special>
                    <Special image={LemmonDessert} name={'Lemmon Dessert'} price={'9.99€'} description={'This is the special description. This is a very special dish. It has fresh ingredients.'}></Special>
                </section>
        </section>
    )
}

export default Highlights;