import { ADD_COMMENT_TO_EVENT, ADD_DESCRIPTION_TO_EVENT, ADD_EVENT_FAIL, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, ADD_LABEL_TO_SELECTED_LABELS_LIST, OPEN_EVENT_POPUP, SET_SELECTED_TASK } from "../actionTypes/calendarActionTypes"

export const openEventPopupActionCreator = (data) => {
    return {
        type: OPEN_EVENT_POPUP,
        payload: data
    }
}

export const addCommentToEvent = (data) => {
    return {
        type: ADD_COMMENT_TO_EVENT,
        payload: data
    }
}

export const addDescriptionToEvent = (data) => {
    return {
        type: ADD_DESCRIPTION_TO_EVENT,
        payload: data
    }
}

export const addEventRequest = (data) => {
    return {
        type: ADD_EVENT_REQUEST,
    }
}

export const addEventSuccess = (data) => {
    return {
        type: ADD_EVENT_SUCCESS,
        payload: data
    }
}

export const addEventFail = (data) => {
    return {
        type: ADD_EVENT_FAIL,
        payload: data
    }
}

export const addLabelToSelectedLabelsList = (data) => {
    return {
        type: ADD_LABEL_TO_SELECTED_LABELS_LIST,
        payload: data
    }
}

export const setSelectedTask = (data) => {
    return {
        type: SET_SELECTED_TASK,
        payload: data
    }
}