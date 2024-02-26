import { OPEN_EVENT_POPUP } from "../actionTypes/calendarActionTypes";

const initialState = {
   showEventPopup: false
}

const calendarReducer = (state = initialState, action) =>{
  switch (action.type) {
      case OPEN_EVENT_POPUP:
        return {
            ...state, showEventPopup: action.payload
        }
    default:
       return state;
  }
};

export default calendarReducer