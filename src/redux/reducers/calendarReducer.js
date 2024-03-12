import moment from "moment";
import { ADD_COMMENT_TO_EVENT, ADD_DESCRIPTION_TO_EVENT, ADD_EVENT_FAIL, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, ADD_LABEL_TO_SELECTED_LABELS_LIST, OPEN_EVENT_POPUP, SET_SELECTED_TASK } from "../actionTypes/calendarActionTypes";

const events = [
  {
    start: moment('2024-02-26T18:00:00').toDate(),
    end: moment('2024-02-26T19:00:00').toDate(),
    title: 'Call with Yaniv',
    eventId: '1',
    comments: []
  },
  {
    start: moment('2024-02-27T20:00:00').toDate(),
    end: moment('2024-02-26T22:00:00').toDate(),
    title: 'Call with Sathish',
    eventId: '2',
    comments: []
  },
  {
    start: moment('2024-02-27T21:00:00').toDate(),
    end: moment('2024-02-29T23:00:00').toDate(),
    title: 'Deployment',
    eventId: '3',
    comments: []
  }
]

const selectedLabels = [{ title: 'labels', checked: false }, { title: 'now', checked: true }, { title: 'lal', checked: false }];

const initialState = {
   showEventPopup: false,
   events: events,
   loading: false,
   error: null,
   selectedLabels: selectedLabels,
   selectedTask: null
}

const calendarReducer = (state = initialState, action) =>{
  switch (action.type) {
      case OPEN_EVENT_POPUP:
        return {
            ...state, showEventPopup: action.payload
        }
    case ADD_EVENT_REQUEST:
      return {
        ...state, loading: true,
      }
    case ADD_EVENT_SUCCESS:
      const data = [...state.events, action.payload]
      return {
        ...state, loading: false, events: data
      }
    case ADD_EVENT_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }

    case ADD_COMMENT_TO_EVENT:
      // fins the event, where to add comment by eventId
      const filteredEventToAddComment = state.events.map((event) => {
        if(event?.eventId === action.payload.eventId){
          const modifiedEvent = {...event, comments: [action.payload.comment]}
          return modifiedEvent
        }else{
          return event
        }
      })
      return {
        ...state, events: filteredEventToAddComment
      }

    case ADD_DESCRIPTION_TO_EVENT:
      const filteredEventToAddDescription = state.events.map((event) => {
        if (event?.eventId === action.payload.eventId) {
          const modifiedEvent = { ...event, descriptions: [action.payload.description] }
          return modifiedEvent
        } else {
          return event
        }
      })
      return {
        ...state, events: filteredEventToAddDescription
      }

    case ADD_LABEL_TO_SELECTED_LABELS_LIST:
      const modifiedLabelsAfterCheck = state.selectedLabels.map((label) => {
        if (label.title === action.payload.title) {
          return ({
            ...label, checked: !label.checked
          })
        } else {
          return label
        }
      })
      return {
        ...state, selectedLabels: modifiedLabelsAfterCheck
      }

    case SET_SELECTED_TASK:
      console.log("action.payload", action.payload)
      return {
        ...state, selectedTask: action.payload
      }

    default:
       return state;
  }
};

export default calendarReducer