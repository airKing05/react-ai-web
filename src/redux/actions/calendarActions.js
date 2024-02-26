import { OPEN_EVENT_POPUP } from "../actionTypes/calendarActionTypes"

export const openEventPopupActionCreator = (data) => {
    return {
        type: OPEN_EVENT_POPUP,
        payload: data
    }
}