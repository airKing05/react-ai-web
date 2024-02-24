import React from 'react';
import "./Calender.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

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
  return (
    <div className='calender_container'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // style={{ height: 500 }}
      />
    </div>
  )
}
