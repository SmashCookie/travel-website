import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { Destinations, MainDestinations } from './constants/constants';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {MainDestinations.map(({ id, label, text, imgSource, path }) => (
                            <CardItem key={id} text={text} src={imgSource} label={label} path={path} />
                        ))}
                    </ul>
                    <ul className='cards__items'>
                        {Destinations.map(({ id, label, text, imgSource, path }) => (
                            <CardItem key={id} text={text} src={imgSource} label={label} path={path} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
