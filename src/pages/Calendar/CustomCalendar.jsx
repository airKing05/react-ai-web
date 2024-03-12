import React, { useEffect, useState } from 'react';
import "./Calender.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import EventDetailPopup from './Components/EventDetailPopup/EventDetailPopup';
import { useDispatch, useSelector } from 'react-redux';
import { openEventPopupActionCreator, setSelectedTask } from '../../redux/actions/calendarActions';


const localizer = momentLocalizer(moment);



export default function CustomCalendar() {
  const {events, loading, errors } = useSelector((state) => state.calendar)

  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventsData, setEventsData] = useState(events);
  const [tasks, setTasks] = useState([]);

  const dispatch = useDispatch();
  const showEventDetailsPopup = useSelector((state) => state.calendar.showEventPopup);


  const handleSelected = (task) => {
    // const selectedTask = tasks.find((_task) => _task.id === task.id);
    dispatch(openEventPopupActionCreator(true))
    setSelectedEvent(task);
    dispatch(setSelectedTask(task))

    // setShowEventDetails(true)
  };

  const handleSelectSlot = (slotInfo) => {
   
   
    const newEvent = {
        title: "New event",
        start: slotInfo.start,
        end: slotInfo.end,
        description: slotInfo.description
      };
    setSelectedEvent(() => newEvent)
    dispatch(openEventPopupActionCreator(true))
    dispatch(setSelectedTask({ ...slotInfo, title: "New task" }))
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

  useEffect(()=>{
    setTasks((prevState) => ([...prevState, ...events]))
  },[events])

  const getTasks = async () => {
    let tasks = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:KgufNWJV/tasks');
    tasks = await tasks.json();
    tasks = tasks.map((task) => {
      const newTasks = {
        created_at: moment(moment(task.created_at).toISOString()?.slice(0, -5)).toDate(),
        start: moment(moment(task.start_at).toISOString()?.slice(0, -5)).toDate(), // moment(task.start_at).toISOString()?.slice(0, -5), //moment(moment(task.start_at).toISOString()?.slice(0, -5)).toDate(),
        end: moment(moment(task.end_at).toISOString()?.slice(0, -5)).toDate(), //moment(task.end_at).toISOString()?.slice(0, -5), // ,
        title: task.name,
        id: task.id
      }
      return newTasks;
    })
    setTasks(tasks);
  }
 
  useEffect(() => {
    getTasks();
  }, [])
  
  return (
    <div className='calender_container'>
      <Calendar
        selectable
        localizer={localizer}
        events={tasks}
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
