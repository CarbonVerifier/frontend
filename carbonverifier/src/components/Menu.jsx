import { Link } from 'react-router-dom';
import { useState } from 'react';
import { logo } from '../assets/logo.svg';
import Home from '../pages/Home';

export default function Menu() {
    return (
        <div className='flex justify-between w-full absolute top-0'>
            <img src={logo} alt="Carbon Verifier Logo" />
            <Link to={Home}>Home</Link>
        </div>
    )
}