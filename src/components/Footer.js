import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Join the Adventure newsletter to receive our best vacation deals</p>
                <p className='footer-subscription-text'>You can unsubscribe at any time</p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Your Email' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/ReactTravel/sign-up'>How it works</Link>
                        <Link to='/ReactTravel/sign-up'>Testimonials</Link>
                        <Link to='/ReactTravel/sign-up'>Careers</Link>
                        <Link to='/ReactTravel/sign-up'>Investors</Link>
                        <Link to='/ReactTravel/sign-up'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact us</h2>
                        <Link to='/ReactTravel/sign-up'>Contact</Link>
                        <Link to='/ReactTravel/sign-up'>Support</Link>
                        <Link to='/ReactTravel/sign-up'>Destinations</Link>
                        <Link to='/ReactTravel/sign-up'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/ReactTravel/sign-up'>Submit Video</Link>
                        <Link to='/ReactTravel/sign-up'>Ambassadors</Link>
                        <Link to='/ReactTravel/sign-up'>Agency</Link>
                        <Link to='/ReactTravel/sign-up'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/ReactTravel/sign-up'>Instagram</Link>
                        <Link to='/ReactTravel/sign-up'>Facebook</Link>
                        <Link to='/ReactTravel/sign-up'>YouTube</Link>
                        <Link to='/ReactTravel/sign-up'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/ReactTravel' className='social-logo'>
                            R.Travel <i className='fab fa-react'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>R.Travel &copy; 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link' to='/ReactTravel' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link' to='/ReactTravel' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link' to='/ReactTravel' target='_blank' aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
