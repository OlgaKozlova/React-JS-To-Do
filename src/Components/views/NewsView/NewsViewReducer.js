import Immutable from 'immutable';
import {
    SET_NEWS,
} from './NewsViewConstants.js';

export const initialState = Immutable.fromJS({
    news: [],
});

export const CalendarViewReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
    case SET_NEWS: {
        return state.set('news', payload.news);
    }
    default: {
        return state;
    }
    }
};
