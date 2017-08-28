import {
    INCREMENT_MONTH,
    DECREMENT_MONTH,
    SET_ACTIVE_DAY,
    OPEN_ADD_EDIT_TO_DO_ITEM_FORM,
    CHANGE_TO_DO_ITEM_TEXT,
    CHANGE_TO_DO_ITEM_TITLE,
    CHANGE_TO_DO_ITEM_DATE,
    SAVE_TO_DO_ITEM,
    CANCEL_ADDING_TO_DO_ITEM,
    DELETE_TO_DO_ITEM,
} from './CalendarViewConstants';

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
    openAddEditToDoItemForm: () => ({
        type: OPEN_ADD_EDIT_TO_DO_ITEM_FORM,
        payload: {},
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
    cancelToDoItemAction: () => ({
        type: CANCEL_ADDING_TO_DO_ITEM,
        payload: {},
    }),
    saveToDoItem: () => ({
        type: SAVE_TO_DO_ITEM,
        payload: {},
    }),
    deleteToDoItem: id => ({
        type: DELETE_TO_DO_ITEM,
        payload: {
            id,
        },
    }),
};