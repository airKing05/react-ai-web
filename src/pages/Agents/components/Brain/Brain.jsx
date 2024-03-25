import React from 'react';
import "./Brain.css";
import SingleQuestionCard from './components/SingleQuestionCard';

export default function Brain() {
  return (
    <div className='brain__container'>
      <SingleQuestionCard/>
      <SingleQuestionCard />

      <SingleQuestionCard />



        {/* <div className='brain__chat bot'>
            <div className='brain__chat_header'>
                <div className='chat_header__user_icon bot_icon'>B</div>
                <div className='chat_header__user_name'>Bot</div>
            </div>
              <div className='brain__chat_content'>
                 <p>This is the content of the brain chat</p>
              </div>
        </div> */}
        
          {/* <div className='brain__chat user'>
              <div className='brain__chat_header'>
                  <div className='chat_header__user_icon user_icon'>A</div>
                  <div className='chat_header__user_name'>A-user</div>
              </div>
              <div className='brain__chat_content'>
                  <p>This is the content of the brain chat</p>
              </div>
          </div> */}
    </div>
  )
}
