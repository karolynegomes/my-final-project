import React from 'react';
import Restaurant from './photos/mario and adrian.jpg'

function About () {
    return (
        <section id="about" className='About' style={{display: 'flex'}}>
            <div>
                <h1 style={{color: "#495E57", fontSize: 25}}>About</h1>
                <div className="about-div">
                    <p className="p-about" style={{fontSize: 15, margin: 30, color: '#333333'}}>A culinary haven born from the passion of its founders, Mario and Adrian. With a shared love for creating exceptional dining experiences, these visionary chefs embarked on a journey to bring you a restaurant where innovation meets tradition. At Little Lemon, we are dedicated to serving dishes that not only tantalize the taste buds but also reflect the duo's commitment to quality and creativity. Mario and Adrian's culinary expertise, coupled with a warm and inviting ambiance, invite you to indulge in a dining adventure that celebrates the artistry of food. Join us at Little Lemon, where every meal is a testament to our founders' culinary dedication and your satisfaction is our greatest joy.</p>
                    <img className="about-photo" alt="owners" src={Restaurant} style={{maxWidth: 300, margin: 30}}></img>
                </div>
            </div>
        </section>
    )
}

export default About;