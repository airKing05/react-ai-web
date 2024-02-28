import React from 'react';
import "./Auth.css";

export default function SignUp() {
  return (
      <div className='auth__container'>
          <h4>Sign up and explore the React AI WEB</h4>
          
          <div className='auth__inputs'>
              <input placeholder='FUll Name' type='text' />
          </div>
          <div className='auth__inputs'>
              <input placeholder='Email' type='email' />
          </div>
          <div className='auth__inputs'>
              <input placeholder='Password' type='password' />
          </div>
          <div className='auth__btn auth__inputs__auth_btn'>
              Sign up
          </div>
      </div>
  )
}
