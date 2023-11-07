import React from 'react';

function Footer () {
    return (
        <footer>
            <img src={require ('./logo.png')} alt='logo'/>
            <section>
                <article>
                    <h5>Doormat navigation</h5>
                    <ul>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                    </ul>
                </article>
                <article>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                    </ul>
                </article>
                <article>
                    <h5>Social Media Links</h5>
                    <ul>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                        <li><a href="/">Link</a></li>
                    </ul>
                </article>
            </section>
        </footer>
    )
}

export default Footer;