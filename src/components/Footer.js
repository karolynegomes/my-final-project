import React from 'react';

function Footer () {
    return (
        <footer>
            <article>
                <div>
                    <h3 style={{color: '#333333'}} className="h5-title">Contact</h3>
                    <div style={{marginBottom: 10}} className="links">
                        <a style={{fontSize: 15, margin: 5, color: '#333333', textDecoration: 'none'}} href="/">Address: <br/>Street 8, City</a>
                        <a style={{fontSize: 15, margin: 5, color: '#333333', textDecoration: 'none'}} href="/">Phone number: <br/>900123123</a>
                        <a style={{fontSize: 15, margin: 5, color: '#333333', textDecoration: 'none'}} href="/">Email: <br/>info@littlelemon.com</a>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <h3 style={{color: '#333333'}} className="h5-title">Social Media</h3>
                    <div style={{marginBottom: 10}} className="links">
                        <a style={{fontSize: 15, margin: 5, color: '#333333', textDecoration: 'none'}} href="/">Facebook</a>
                        <a style={{fontSize: 15, margin: 5, color: '#333333', textDecoration: 'none'}} href="/">Instagram</a>
                        <a style={{fontSize: 15, margin: 5, color: '#333333', textDecoration: 'none'}} href="/">TikTok</a>
                    </div>
                </div>
            </article>
        </footer>
    )
}

export default Footer;