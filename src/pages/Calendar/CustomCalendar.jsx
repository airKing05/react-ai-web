import React, { useState } from 'react';
import "./Calender.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import EventDetailPopup from './Components/EventDetailPopup/EventDetailPopup';

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment('2024-02-24T18:00:00').toDate(),
    end: moment('2024-02-24T19:00:00').toDate(),
    title: 'Call with Yaniv'
  },
  {
    start: moment('2024-02-24T20:00:00').toDate(),
    end: moment('2024-02-24T22:00:00').toDate(),
    title: 'With Sathish'
  }
]

export default function CustomCalendar() {
  const [showEventDetails, setShowEventDetails] = useState(false)
  return (
    <div className='calender_container'>
      <div onClick={() => setShowEventDetails(true)}>Show Event Details</div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // style={{ height: 500 }}
      />
      {
        showEventDetails ? <div className='popup_bg__overlay'></div> : null
      }
      {
        showEventDetails ? <div className='popup_container'>
          <EventDetailPopup setShowEventDetails={setShowEventDetails}/>
        </div> : null
      }
    </div>
  )
}
