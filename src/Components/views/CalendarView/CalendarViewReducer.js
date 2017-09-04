import Immutable from 'immutable';
import moment from 'moment';
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

export const initialState = Immutable.Map({
    activeDate: moment(),
    isAddEditFormShown: false,
    toDoItemId: null,
    toDoItemTitle: '',
    toDoItemText: '',
    toDoItemDate: null,
});

export const CalendarViewReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
    case INCREMENT_MONTH: {
        return state.set('activeDate', moment(state.get('activeDate')).add(1, 'month').startOf('month'));
    }
    case DECREMENT_MONTH: {
        return state.set('activeDate', moment(state.get('activeDate')).subtract(1, 'month').startOf('month'));
    }
    case SET_ACTIVE_DAY: {
        return state.set('activeDate', payload.activeDay);
    }
    case OPEN_ADD_EDIT_TO_DO_ITEM_FORM: {
        return state
            .set('isAddEditFormShown', true)
            .set('toDoItemId', payload.id);
    }
    case CHANGE_TO_DO_ITEM_TEXT: {
        return state.set('toDoItemText', payload.text);
    }
    case CHANGE_TO_DO_ITEM_TITLE: {
        return state.set('toDoItemTitle', payload.title);
    }
    case CHANGE_TO_DO_ITEM_DATE: {
        return state.set('toDoItemDate', payload.date);
    }
    case CANCEL_ADDING_TO_DO_ITEM: {
        return state.set('isAddEditFormShown', false);
    }
    default: {
        return state;
    }
    }
};
