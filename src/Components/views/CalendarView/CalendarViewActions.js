import {
    INCREMENT_MONTH,
    DECREMENT_MONTH,
    SET_ACTIVE_DAY,
    OPEN_ADD_EDIT_TO_DO_ITEM_FORM,
    CHANGE_TO_DO_ITEM_TEXT,
    CHANGE_TO_DO_ITEM_TITLE,
    CHANGE_TO_DO_ITEM_DATE,
    CANCEL_ADDING_TO_DO_ITEM,
} from './CalendarViewConstants.js';

import {
    getToDoItemDate,
    getToDoItemText,
    getToDoItemTitle,
} from './CalendarViewSelector.js';

import { addToDo, deleteToDo } from '../../../Features/ToDo/ToDo.js';

export default {
    incrementMonth: () => ({
        type: INCREMENT_MONTH,
        payload: {},
    }),
    decrementMonth: () => ({
        type: DECREMENT_MONTH,
        payload: {},
    }),
    setActiveDay: activeDay => ({
        type: SET_ACTIVE_DAY,
        payload: {
            activeDay,
        },
    }),
    openAddEditToDoItemForm: id => ({
        type: OPEN_ADD_EDIT_TO_DO_ITEM_FORM,
        payload: {
            id,
        },
    }),
    changeToDoItemText: text => ({
        type: CHANGE_TO_DO_ITEM_TEXT,
        payload: {
            text,
        },
    }),
    changeToDoItemTitle: title => ({
        type: CHANGE_TO_DO_ITEM_TITLE,
        payload: {
            title,
        },
    }),
    changeToDoItemDate: date => ({
        type: CHANGE_TO_DO_ITEM_DATE,
        payload: {
            date,
        },
    }),
    cancelSaveToDoItem: () => ({
        type: CANCEL_ADDING_TO_DO_ITEM,
        payload: {},
    }),
    saveToDoItem: () => (dispatch, getState) => {
        const state = getState();
        const date = getToDoItemDate(state);
        const text = getToDoItemText(state);
        const title = getToDoItemTitle(state);

        dispatch(addToDo(date, text, title));
    },
    deleteToDoItem: id => (dispatch) => {
        dispatch(deleteToDo(id));
    },
};
