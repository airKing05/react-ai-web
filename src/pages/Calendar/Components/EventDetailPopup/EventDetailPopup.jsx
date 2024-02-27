import React, { useState } from 'react';
import "./EventDetailsPopup.css";
import { useDispatch } from 'react-redux';
import { openEventPopupActionCreator } from '../../../../redux/actions/calendarActions';
import moment from 'moment';

const mergedDateTime = (date, modifiedTime) => {
    const newDate = date.clone().set({
        hour: modifiedTime.hours(),
        minute: modifiedTime.minutes(),
        second: modifiedTime.seconds()
    });
    const finalFormattedDate = newDate.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ [(India Standard Time)]');
    return finalFormattedDate;
}

export default function EventDetailPopup(props) {
    const { setShowEventDetails, setEventsData, setSelectedEvent, selectedEvent } = props;
    const [showPrimaryEventContentBorder, setPrimaryEventContentBorder] = useState(false);
    const [primaryEventContentInputValue, setPrimaryEventContentInputValue] = useState('');
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [endTime, setEndTime] = useState(moment(selectedEvent.end).format('HH:mm:ss'));
    const [startTime, setStartTime] = useState(moment(selectedEvent.end).format('HH:mm:ss'))

    const dispatch = useDispatch();

    const handelPrimaryEventInputFocus = () => {
        setPrimaryEventContentBorder(true)
    }
    const handelPrimaryEventInputChange = (e) => {

        setPrimaryEventContentInputValue(e.target.value)
    }


    const submitEventDetails = () => {
        const startDate = moment(selectedEvent.start);
        const endDate = moment(selectedEvent.end);
        const modifiedStartTimeMoment = moment(startTime, 'HH:mm');
        const modifiedEndTimeMoment = moment(endDate, 'HH:mm');


        const mergedStartDateTime = mergedDateTime(startDate, modifiedStartTimeMoment);
        const mergedEndDateTime = mergedDateTime(endDate, modifiedEndTimeMoment)

        const newEvent = {
            ...selectedEvent,
            start: mergedStartDateTime,
            end: mergedEndDateTime
        }
       
        setEventsData((prevState) => [...prevState, newEvent])
        dispatch(openEventPopupActionCreator(false))
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        if(name === 'endTime'){
            setEndTime(value)
        }else{
            setStartTime(value)
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='event_detail__container'>
                <header className='event_details__header'>
                    <div className='event_details__header-left'>
                        <span>#Home</span>
                    </div>
                    <div className='event_details__header-right'>
                        <span>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C" />
                                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#1C274C" />
                                <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C" />
                            </svg>
                        </span>
                        <span
                            className='btn'
                            onClick={() => {
                                // setShowEventDetails(false)
                                dispatch(openEventPopupActionCreator(false))
                            }
                            }>
                            <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000" />
                            </svg>
                        </span>
                    </div>
                </header>
                <main className='event_details__content'>
                    <section className='event_details__content-main'>
                        <div style={{height: 'calc(100% - 60px)'}}>
                        <div>
                            <div className='event_details__primary_event'>
                                <div className='content_main__checkMarkContainer'></div>
                                <div className={`${showPrimaryEventContentBorder ? 'content_border' : ''} event_details__primary_event_content `}>
                                    <h3> Do a weekly review of my tasks and goals</h3>
                                    <div className='event_details__primary_event_details'>
                                        {
                                            !primaryEventContentInputValue?.length ? <div>
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 12H20M4 8H20M4 16H12" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div> : null
                                        }

                                        <div className='event_details__primary_event_input_area'>
                                            <textarea placeholder='Description'
                                                onFocus={handelPrimaryEventInputFocus}
                                                onChange={handelPrimaryEventInputChange}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {
                                showPrimaryEventContentBorder ? <div className='primary_event_content__btn_container'>
                                    <button className='btn_cancel'
                                        onClick={() => setPrimaryEventContentBorder(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button className='btn_save'>
                                        Save
                                    </button>
                                </div> : null
                            }
                        </div>
                        <div className='event_details__comment_section'>
                            {
                                showCommentBox ?
                                    <div className='event_details__primary_event'>
                                        <div className='event_details__primary_event_content content_border'>
                                            <div className='event_details__primary_event_details'>
                                                <div className='event_details__primary_event_input_area'>
                                                    <textarea placeholder='Comment'
                                                        onChange={handelPrimaryEventInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className='primary_event_content__btn_container'>
                                                <button className='btn_cancel'
                                                    onClick={() => setShowCommentBox(false)}
                                                >
                                                    Cancel
                                                </button>
                                                <button className='btn_save'>
                                                    Comment
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='event_details__comment_default'>
                                        <div className='comment_default__profile_icon'>
                                            <img src="https://dcff1xvirvpfp.cloudfront.net/a11ab89c4f874238b565c59b69db36b3_small.jpg" />
                                        </div>
                                        <div className='comment_default__comment_input_placeholder'
                                            onClick={() => setShowCommentBox(true)}
                                        >
                                            Comment
                                        </div>
                                    </div>
                            }


                        </div>
                        </div>
                        <footer>
                            <button className='btn_save submit__event' onClick={submitEventDetails}>Submit</button>
                        </footer>
                    </section>
                    <aside className='event_details__content-sidebar'>

                        <ul>
                            <li>
                                <h6>Event</h6>
                                <div>
                                    <span>
                                        <svg fill="#999999" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <title>hashtag</title>
                                            <path d="M30 20.75h-8.078l1.696-9.5h6.679c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-6.233l1.166-6.53c0.014-0.070 0.022-0.151 0.022-0.233 0-0.69-0.56-1.25-1.25-1.25-0.618 0-1.131 0.448-1.232 1.036l-0.001 0.007-1.245 6.97h-9.461l1.166-6.53c0.014-0.070 0.022-0.151 0.022-0.233 0-0.69-0.56-1.25-1.25-1.25-0.618 0-1.131 0.448-1.232 1.036l-0.001 0.007-1.245 6.97h-7.228c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h6.782l-1.697 9.5h-5.382c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h4.936l-1.166 6.529c-0.012 0.066-0.019 0.142-0.019 0.22 0 0.613 0.441 1.123 1.023 1.23l0.008 0.001c0.065 0.012 0.141 0.020 0.217 0.020 0.001 0 0.002 0 0.003 0h-0c0.612-0.001 1.121-0.441 1.228-1.022l0.001-0.008 1.245-6.971h9.46l-1.166 6.529c-0.012 0.066-0.020 0.143-0.020 0.221 0 0.69 0.56 1.25 1.25 1.25 0.612 0 1.122-0.44 1.229-1.022l0.001-0.008 1.245-6.971h8.525c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM9.922 20.75l1.696-9.5h9.461l-1.697 9.5z"></path>
                                        </svg>
                                    </span>
                                    <span> Call with Yaniv</span>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <h6>Date</h6>
                                <div>
                                    <span>
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.75C7.41421 1.75 7.75 2.08579 7.75 2.5V3.26272C8.41203 3.24999 9.1414 3.24999 9.94358 3.25H14.0564C14.8586 3.24999 15.588 3.24999 16.25 3.26272V2.5C16.25 2.08579 16.5858 1.75 17 1.75C17.4142 1.75 17.75 2.08579 17.75 2.5V3.32709C18.0099 3.34691 18.2561 3.37182 18.489 3.40313C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33855 22.5969 7.51098C22.6472 7.88567 22.681 8.29459 22.7037 8.74007C22.7337 8.82106 22.75 8.90861 22.75 9C22.75 9.06932 22.7406 9.13644 22.723 9.20016C22.75 10.0021 22.75 10.9128 22.75 11.9436V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V11.9436C1.24999 10.9127 1.24998 10.0021 1.27701 9.20017C1.25941 9.13645 1.25 9.06932 1.25 9C1.25 8.90862 1.26634 8.82105 1.29627 8.74006C1.31895 8.29458 1.35276 7.88566 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C5.7439 3.37182 5.99006 3.34691 6.25 3.32709V2.5C6.25 2.08579 6.58579 1.75 7 1.75ZM2.76309 9.75C2.75032 10.4027 2.75 11.146 2.75 12V14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25H14C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14V12C21.25 11.146 21.2497 10.4027 21.2369 9.75H2.76309ZM21.1683 8.25H2.83168C2.8477 8.06061 2.86685 7.88123 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02502 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.1331 7.88123 21.1523 8.06061 21.1683 8.25ZM16.5 15.75C16.0858 15.75 15.75 16.0858 15.75 16.5C15.75 16.9142 16.0858 17.25 16.5 17.25C16.9142 17.25 17.25 16.9142 17.25 16.5C17.25 16.0858 16.9142 15.75 16.5 15.75ZM14.25 16.5C14.25 15.2574 15.2574 14.25 16.5 14.25C17.7426 14.25 18.75 15.2574 18.75 16.5C18.75 17.7426 17.7426 18.75 16.5 18.75C15.2574 18.75 14.25 17.7426 14.25 16.5Z" fill="#1C274C" />
                                        </svg>
                                    </span>
                                    <span>
                                        25 Feb
                                    </span>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <h6>Start</h6>
                                <div className='time-picker-container'>
                                    <span>
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
                                            <path d="M12 8V12L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span>
                                        <input type='time' value={startTime} name='startTime' onChange={(e) => handleChange(e)} />
                                    </span>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <h6>End</h6>
                                <div className='time-picker-container'>
                                    <span>
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
                                            <path d="M12 8V12L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span>
                                        <input type='time' name='endTime' value={endTime} onChange={(e) => handleChange(e)} />
                                    </span>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <h6>Priority</h6>
                                <div>
                                    <span>
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#B067F3">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M3 3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3z" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span>
                                        25 Feb
                                    </span>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <div>
                                    <span style={{ marginTop: '4px' }}>
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12H18M12 6V18" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span>
                                        Labels
                                    </span>
                                </div>

                                <hr />
                            </li>
                        </ul>
                    </aside>
                </main>
            </div>
        </div>
    )
}
