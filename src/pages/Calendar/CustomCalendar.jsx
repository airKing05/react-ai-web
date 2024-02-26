import React, { useState } from 'react';
import "./Calender.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import EventDetailPopup from './Components/EventDetailPopup/EventDetailPopup';

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment('2024-02-26T18:00:00').toDate(),
    end: moment('2024-02-26T19:00:00').toDate(),
    title: 'Call with Yaniv'
  },
  {
    start: moment('2024-02-26T20:00:00').toDate(),
    end: moment('2024-02-26T22:00:00').toDate(),
    title: 'With Sathish'
  },
  {
    start: moment('2024-02-26T21:00:00').toDate(),
    end: moment('2024-02-26T23:00:00').toDate(),
    title: 'Deployment'
  }
]

export default function CustomCalendar() {
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleSelected = (event) => {
    // console.log("event", event)
    setSelectedEvent(event);
    setShowEventDetails(true)
  };
  return (
    <div className='calender_container'>
      {/* <div onClick={() => setShowEventDetails(true)}>Show Event Details</div> */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelected}
        // style={{ height: 500 }}
      />
      {
        showEventDetails ? <div className='popup_bg__overlay'></div> : null
      }
      {
        showEventDetails ? <div className='popup_container'>
          <EventDetailPopup 
          setShowEventDetails={setShowEventDetails}
          selectedEvent={selectedEvent}
          />
        </div> : null
      }
    </div>
  )
}
