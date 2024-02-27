import React, { useState } from 'react';
import "./Calender.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import EventDetailPopup from './Components/EventDetailPopup/EventDetailPopup';
import { useDispatch, useSelector } from 'react-redux';
import { openEventPopupActionCreator } from '../../redux/actions/calendarActions';


const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment('2024-02-26T18:00:00').toDate(),
    end: moment('2024-02-26T19:00:00').toDate(),
    title: 'Call with Yaniv'
  },
  {
    start: moment('2024-02-27T20:00:00').toDate(),
    end: moment('2024-02-26T22:00:00').toDate(),
    title: 'With Sathish'
  },
  {
    start: moment('2024-02-27T21:00:00').toDate(),
    end: moment('2024-02-29T23:00:00').toDate(),
    title: 'Deployment'
  }
]

export default function CustomCalendar() {
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventsData, setEventsData] = useState(events);


  const dispatch = useDispatch();
  const showEventDetailsPopup = useSelector((state) => state.calendar.showEventPopup);
  // console.log("showEventDetailsPopup", showEventDetailsPopup)

  const handleSelected = (event) => {
    dispatch(openEventPopupActionCreator(true))
    setSelectedEvent(event);
    // setShowEventDetails(true)
  };

  const handleSelectSlot = (slotInfo) => {
    // dispatch(openEventPopupActionCreator(true))
    // const newEvent = {
    //     title: "khbskfhbsd",
    //     start: slotInfo.start,
    //     end: slotInfo.end,
    //   };
    // setSelectedEvent(newEvent)

    // const title = window.prompt('Enter event title:');
    // if (title) {
    //   const newEvent = {
    //     title: title,
    //     start: slotInfo.start,
    //     end: slotInfo.end,
    //   };
    //   console.log("newEvent", newEvent)
    //   setEventsData([...eventsData, newEvent]); 
    // }
  };

  return (
    <div className='calender_container'>
      <Calendar
        selectable
        localizer={localizer}
        events={eventsData}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelected}
        onSelectSlot={handleSelectSlot}
        defaultDate={new Date()}
      />
      {
        showEventDetailsPopup ? <div className='popup_bg__overlay'></div> : null
      }
      {
        showEventDetailsPopup ? <div className='popup_container'>
          <EventDetailPopup 
          setShowEventDetails={setShowEventDetails}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          setEventsData={setEventsData}
          />
        </div> : null
      }
    </div>
  )
}
