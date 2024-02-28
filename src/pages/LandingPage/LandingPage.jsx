import React from 'react';
import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/layout/chat`)
    }
    return (
        <>
            <div className='home_container'>
                <div className='home_content__heading'>
                    <h1>This is new react app for managing daily activities</h1>
                    <h6>Build and deploy an AI Copilot in a day. It connects to your API,</h6>
                    <button className='btn' onClick={handleClick}>Go to active</button>
                </div>
            </div>
        </>
    )
}
