import React from 'react';
import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/layout/chat`)
    }
    return (
        <div className='home_container'>
            <h1>This is new react app for managing daily activities</h1>
            <h4>by Vite</h4>
            <button className='btn' onClick={handleClick}>Go to active</button>
        </div>
    )
}
