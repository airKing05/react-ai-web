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
    const { showChatPopup, setShowChatPop, listening, transcript, stopListening, startListening, resetTranscript } = props;
    const [chats, setChats] = useState(chatsData);
    const [inputMsg, setInputMsg] = useState(transcript ? transcript : '');
    const [isMsgSendSuccessfully, setMsgSendSuccessFully] = useState(false)

    const msgEndRef = useRef(null);

    const handelMsgInputChange = (e) => {
        if(e.target.value){
            setInputMsg(e.target.value)
        }else{
            setInputMsg('')
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
        stopListening();
        setTimeout(() => {
            resetTranscript()
        }, 0);
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

    useEffect(()=>{
        setInputMsg(transcript)
    }, [transcript])


    return (
        <div className='chatPopup__container'>
            <div className="chatPopup_header">
                <div className='chatPopup_header__you'>
                    {/* <img src='https://corover.ai/wp-content/uploads/2022/06/AskDISHA2.0-Book-train-ticket-full-text-1.png' /> */}
                    <span>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
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
                {
                    !listening ? <div onClick={startListening}>
                        <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>ic_fluent_mic_on_48_filled</title>
                            <desc>Created with Sketch.</desc>
                            <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="ic_fluent_mic_on_48_filled" fill="#B067F3" fill-rule="nonzero">
                                    <path d="M34.5,23.75 C35.1903559,23.75 35.75,24.3096441 35.75,25 C35.75,30.7904522 31.3753005,35.5591386 25.7506989,36.1812617 L25.75,38.75 C25.75,39.4403559 25.1903559,40 24.5,40 C23.8527913,40 23.3204661,39.5081253 23.2564536,38.8778052 L23.25,38.75 L23.2503043,36.1813727 C17.6252197,35.5597057 13.25,30.7907965 13.25,25 C13.25,24.3096441 13.8096441,23.75 14.5,23.75 C15.1903559,23.75 15.75,24.3096441 15.75,25 C15.75,29.8324916 19.6675084,33.75 24.5,33.75 C29.3324916,33.75 33.25,29.8324916 33.25,25 C33.25,24.3096441 33.8096441,23.75 34.5,23.75 Z M24.5,8 C27.5375661,8 30,10.4624339 30,13.5 L30,24.5 C30,27.5375661 27.5375661,30 24.5,30 C21.4624339,30 19,27.5375661 19,24.5 L19,13.5 C19,10.4624339 21.4624339,8 24.5,8 Z" id="🎨-Color">

                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div> : <div onClick={stopListening}>
                        <svg width="30px" height="30px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 10.5609V14.5C9.5 16.9853 11.5147 19 14 19C15.0998 19 16.1075 18.6055 16.8892 17.9502L18.3071 19.3682C17.1603 20.3835 15.6521 20.9999 14 20.9999C10.4101 20.9999 7.5 18.0893 7.5 14.4995V13.7505C7.5 13.3363 7.16421 13.0005 6.75 13.0005C6.33579 13.0005 6 13.3367 6 13.7509V14.4999C6 18.6653 9.18341 22.0871 13.25 22.4652V25.2499C13.25 25.6641 13.5858 25.9999 14 25.9999C14.4142 25.9999 14.75 25.6641 14.75 25.2499V22.4652C16.5205 22.3006 18.1235 21.5591 19.3694 20.4304L24.7194 25.7806C25.0123 26.0735 25.4872 26.0735 25.7801 25.7806C26.073 25.4877 26.073 25.0128 25.7801 24.7199L20.3832 19.323C21.398 17.982 22 16.3112 22 14.4999V13.7505C22 13.3363 21.6642 13.0005 21.25 13.0005C20.8358 13.0005 20.5 13.3365 20.5 13.7507V14.4999C20.5 15.8965 20.0596 17.1902 19.31 18.2497L3.28033 2.21979C2.98744 1.92689 2.51257 1.92689 2.21967 2.21978C1.92678 2.51267 1.92677 2.98754 2.21967 3.28044L9.5 10.5609Z" fill="#B067F3" />
                            <path d="M18.4369 15.2552L9.50347 6.32166C9.59711 3.91905 11.5744 2 14 2C16.4853 2 18.5 4.01472 18.5 6.5V14.5C18.5 14.7574 18.4784 15.0097 18.4369 15.2552Z" fill="#B067F3" />
                        </svg>
                    </div>
                }
                
               
                <div onClick={handelSendMsg} className='btn'>
                    {/* <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#B067F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}

                    <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 493.6 493.6" xmlSpace="preserve">
                        <path style={{ fill: '#FFF8EF' }} d="M397.6,135.6c-3.2,2.4-8,2.4-11.2-0.8c-0.8-0.8-1.6-1.6-1.6-3.2c-1.6-4-0.8-8,3.2-10.4L442.4,82
	    L31.2,186l139.2,91.2l136.8-98.4c1.6-0.8,3.2-1.6,4.8-1.6c2.4,0,4.8,0.8,6.4,2.4l0,0c4,4,3.2,10.4-0.8,13.6l-134.4,96L288,415.6
	    l171.2-324L397.6,135.6z M372,154l-28.8,20.8c-3.2,2.4-8,2.4-11.2-0.8l0,0c-0.8-0.8-1.6-1.6-1.6-3.2c-1.6-4-0.8-8,3.2-10.4
	    l28.8-20.8c1.6-0.8,3.2-1.6,4.8-1.6c2.4,0,4.8,0.8,6.4,2.4l0,0C376.8,144.4,376,150.8,372,154z" />
                        <polygon style={{ fill: '#E5D3F5' }} points="175.2,306.8 214.4,354 157.6,378.8 " />
                        <g>
                            <path style={{ fill: '#B067F3' }} d="M372.8,140.4L372.8,140.4c4,4,3.2,10.4-0.8,13.6l-28.8,20.8c-3.2,2.4-8,2.4-11.2-0.8l0,0
	        c-0.8-0.8-1.6-1.6-1.6-3.2c-1.6-4-0.8-8,3.2-10.4l28.8-20.8c1.6-0.8,3.2-1.6,4.8-1.6C368.8,138,371.2,138.8,372.8,140.4z" />
                            <path style={{ fill: '#B067F3' }} d="M214.4,354l-39.2-47.2l-16.8,72L214.4,354z M459.2,90.8l-62.4,44.8c-3.2,2.4-8,2.4-11.2-0.8
	        c-0.8-0.8-1.6-1.6-1.6-3.2c-1.6-4,0-8,3.2-10.4L441.6,82L30.4,186l139.2,91.2l136.8-98.4c1.6-0.8,3.2-1.6,4.8-1.6
	        c2.4,0,4.8,0.8,6.4,2.4l0,0c4,4,3.2,10.4-0.8,13.6l-134.4,96L288,415.6L459.2,90.8z M492.8,58.8c0.8,1.6,0.8,2.4,0.8,4
	        c0,0.8,0,1.6-0.8,2.4l0,0c0,0,0,0.8-0.8,0.8L297.6,435.6c-1.6,2.4-4,4-7.2,4.8h-0.8c-2.4,0-4.8-0.8-6.4-3.2l-57.6-68.8L148,402.8
	        c-3.2,1.6-6.4,0.8-8.8-1.6c-2.4-2.4-4-5.6-3.2-8.8l24-100.8L4,189.2c-2.4-1.6-4-4.8-4-8.8c0.8-3.2,3.2-6.4,6.4-7.2l476-120
	        c0.8,0,1.6,0,2.4,0c1.6,0,2.4,0,3.2,0.8c0.8,0,0.8,0.8,1.6,0.8c0.8,0.8,2.4,1.6,2.4,3.2C492.8,58,492.8,58.8,492.8,58.8z" />
                        </g>
                        <g>
                            <path style={{ fill: '#E5D3F5' }} d="M441.6,82l-238.4,60c36-7.2,145.6-22.4,195.2-29.6L441.6,82z" />
                            <polygon style={{ fill: '#E5D3F5' }} points="459.2,90.8 419.2,119.6 310.4,373.2 	" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}
