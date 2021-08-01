import React from 'react';
import Button from './Button';
import '../App.css';
import './HeroSection.css';
//change the path to video-2.mp4 to change the BG video.
import bgVideo from './video/video-1.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src={bgVideo} autoPlay loop muted /> */}
            <h1>
                <i className='fab fa-react'></i> ADVENTURE
            </h1>
            <p>Start your journey today!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
