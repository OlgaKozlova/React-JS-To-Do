import { push } from 'react-router-redux';

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
    getToDoItemId,
    getToDoItemDate,
    getToDoItemText,
    getToDoItemTitle,
} from './CalendarViewSelector.js';

import { addToDo, editToDo, deleteToDo, getToDoById } from '../../../Features/ToDo/ToDo.js';

const incrementMonth = () => ({
    type: INCREMENT_MONTH,
    payload: {},
});

const decrementMonth = () => ({
    type: DECREMENT_MONTH,
    payload: {},
});

const setActiveDay = activeDay => ({
    type: SET_ACTIVE_DAY,
    payload: {
        activeDay,
    },
});

const openAddEditToDoItemForm = (id, date, text, title) => ({
    type: OPEN_ADD_EDIT_TO_DO_ITEM_FORM,
    payload: {
        id,
        date,
        text,
        title,
    },
});

const changeToDoItemText = text => ({
    type: CHANGE_TO_DO_ITEM_TEXT,
    payload: {
        text,
    },
});

const changeToDoItemTitle = title => ({
    type: CHANGE_TO_DO_ITEM_TITLE,
    payload: {
        title,
    },
});

const changeToDoItemDate = date => ({
    type: CHANGE_TO_DO_ITEM_DATE,
    payload: {
        date,
    },
});

const cancelSaveToDoItem = () => ({
    type: CANCEL_ADDING_TO_DO_ITEM,
    payload: {},
});

export default {
    incrementMonth,
    decrementMonth,
    setActiveDay,
    changeToDoItemText,
    changeToDoItemTitle,
    changeToDoItemDate,
    cancelSaveToDoItem,
    saveToDoItem: () => (dispatch, getState) => {
        const state = getState();
        const id = getToDoItemId(state);
        const date = getToDoItemDate(state);
        const text = getToDoItemText(state);
        const title = getToDoItemTitle(state);

        if (id) {
            dispatch(editToDo(id, date, text, title));
        } else {
            dispatch(addToDo(id, date, text, title));
        }

        dispatch(cancelSaveToDoItem());
    },
    openAddEditToDoItemForm: id => (dispatch, getState) => {
        const state = getState();
        const item = getToDoById(id, state);

        dispatch(openAddEditToDoItemForm(
            id,
            item.date,
            item.text,
            item.title,
        ));
    },
    deleteToDoItem: id => (dispatch) => {
        dispatch(deleteToDo(id));
    },
    handleMenuItemClick: url => (dispatch) => {
        dispatch(push(url));
    },
};
