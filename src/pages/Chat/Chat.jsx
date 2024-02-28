import React, { useState } from 'react'
import Footer from './components/Footer/Footer';
import "./Chat.css";
import ChatPopup from './components/ChatPopup/ChatPopup';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Chat() {
    const [showChatPopup, setShowChatPop] = useState(false);

    const startListeningFn = () => {
        return SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    }
    const stopListeningFn = () => SpeechRecognition.stopListening();

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

 

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className='chat__container'>
            <div className='chat_content'>
                <h2>Chat with us</h2>
                <div className='chat__voice_part'>
                    <div className='voice_btn'>
                        <button onClick={startListeningFn}>Start speaking</button>
                        <button onClick={stopListeningFn}>Stop speaking</button>
                        <button onClick={resetTranscript}>Clear</button>
                    </div>
                    <div style={{ marginBottom: '1rem', color: '#202020' }}>
                        Microphone:
                        <span style={{ color: listening ? 'green' : '#202020' }}>
                          &nbsp; {listening ? 'on' : 'off'}
                        </span>
                    </div>
                    <p>{transcript}</p>
                </div>
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
