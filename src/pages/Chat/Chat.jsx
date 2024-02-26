import React, { useState } from 'react'
import Footer from './components/Footer/Footer';
import "./Chat.css";
import ChatPopup from './components/ChatPopup/ChatPopup';

export default function Chat() {
    const [showChatPopup, setShowChatPop] = useState(false)
    return (
        <div className='chat__container'>
            <div className='chat_content'>
                <h2>Chat with us</h2>
            {
                showChatPopup ? <ChatPopup 
                        showChatPopup={showChatPopup}
                        setShowChatPop={setShowChatPop}
                /> : null
            }
            </div>
            <Footer 
                showChatPopup={showChatPopup}
                setShowChatPop={setShowChatPop}
            />
        </div>
        
    )
}
