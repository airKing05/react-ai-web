import React, { useEffect, useRef, useState } from 'react';
import "./ChatPopup.css"

const chatsData = [
    {
        sender: 'you',
        msg: 'this chat from the bot side'
    },
    {
        sender: 'me',
        msg: 'this chat from user side'
    },
    {
        sender: 'you',
        msg: 'this chat from the bot side second'
    },
    {
        sender: 'me',
        msg: 'this chat from user side second'
    }
]
export default function ChatPopup(props) {
    const { showChatPopup, setShowChatPop } = props;
    const [chats, setChats] = useState(chatsData);
    const [inputMsg,setInputMsg] = useState('');
    const [isMsgSendSuccessfully, setMsgSendSuccessFully] = useState(false)

    const msgEndRef = useRef(null);

    const handelMsgInputChange = (e) => {
        if(e.target.value){
            setInputMsg(e.target.value)
        }
    }

    const handelSendMsg = () => {
        const newChat = {
            sender: 'me',
            msg: inputMsg
        }
        setChats((prevChats) => [...prevChats, newChat])
        setInputMsg('');
        setMsgSendSuccessFully(true)
    }

    const scrollToBottom = () => {
        msgEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        let timer;
        if (isMsgSendSuccessfully){
            timer = setTimeout(() => {
                const newChat = {
                    sender: 'you',
                    msg: 'Please wait...'
                }
                setChats((prevChats) => [...prevChats, newChat])
                setMsgSendSuccessFully(false)
            }, 500);
        }
        return () => clearTimeout(timer);

    }, [isMsgSendSuccessfully])
    
    useEffect(() => {
        scrollToBottom();
    }, [chats]);


    return (
        <div className='chatPopup__container'>
            <div className="chatPopup_header">
                <div className='chatPopup_header__you'>
                    <img src='https://corover.ai/wp-content/uploads/2022/06/AskDISHA2.0-Book-train-ticket-full-text-1.png' />
                    <span>Disha</span>
                </div>
                <div onClick={() => setShowChatPop(!showChatPopup)} className='btn'>
                    <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#ffffff" />
                    </svg>
                </div>
            </div>
            <div className='chatPopup_chatArea'>
            {
                chats?.map((chat, index) => {
                    if (chat.sender === 'you'){
                        return <div className='chat chat_you' key={index}>
                            <div className='chat_msg_you'>{chat.msg}</div>
                        </div>
                    }else{
                        return <div className='chat chat_me' key={index}>
                            <div className='chat_msg_me'>{chat.msg}</div>
                        </div>
                    }
                })
            }
            <div ref={msgEndRef} />
            </div>
            <div className='chatPopup_inputArea'>
                <input
                    type='text'
                    placeholder='Type here...'
                    value={inputMsg}
                    onChange={handelMsgInputChange}
                />
                <div onClick={handelSendMsg} className='btn'>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#B067F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
