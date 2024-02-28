import React, { useState } from 'react';
import "./Auth.css";
import { useNavigate } from 'react-router-dom';

const user = {
    email: '',
    password: ''
}
export default function SignIn() {
    const [userInputValues, setUserInputValues] = useState(user);
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {value, name} = e.target;
        setUserInputValues((preState) => ({...preState, [name]: value}));
        setErrors('')
    }

    const handleSignIn = () => {
        if (!userInputValues.email || !userInputValues.password){
            setErrors('Invalid credentials')
        }else{
            sessionStorage.setItem('user', JSON.stringify(userInputValues));
            setUserInputValues(user);
            navigate('/');
        } 
    }

    return (
        <div className='auth__container'>
            <h4>Log in to your React AI WEB account</h4>
            <div className='auth__btn btn'>
            <span>
                <svg width="30px" height="30px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47" /><path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4" /><path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00" /><polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374" /><path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435" /><polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626" /><path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4" /></svg>
            </span>
            <span>
                Continue with Google
            </span>
            </div>
            <div className='auth__btn btn'>
                <span>
                    <svg width="30px" height="30px" viewBox="126.445 2.281 589 589" xmlns="http://www.w3.org/2000/svg"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" /><path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#ffffff" /></svg>
                </span>
                <span>
                    Continue with Facebook
                </span>
            </div>
            <div className='auth__inputs'>
                <input placeholder='Email' name='email' value={userInputValues.email} type='email' onChange={handleChange}/>
            </div>
            <div className='auth__inputs'>
                <input placeholder='Password' name='password' value={userInputValues.password} type='password' onChange={handleChange} />
            </div>
            <div className='auth__btn auth__inputs__auth_btn btn' onClick={handleSignIn}>
                Log in
            </div>
            {
                errors.length ? <span className='auth__error'>{errors}</span> : null
            }
        </div>
    )
}
