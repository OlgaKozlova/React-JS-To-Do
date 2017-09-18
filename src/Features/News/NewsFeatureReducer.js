import Immutable from 'immutable';
import { SAVE_NEWS, ADD_URL_TO_SELECTED, REMOVE_URL_FROM_SELECTED } from './NewsFeatureConstants.js';

export const initialState = Immutable.fromJS({
    actualNews: [],
    selectedNewsUrls: [],
});

export const NewsFeatureReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
    case SAVE_NEWS: {
        const news = Immutable.List(payload.news.map(item => [item.url, item]));
        return state.set('actualNews', Immutable.Map(news));
    }
    case ADD_URL_TO_SELECTED: {
        return state.update('actualNews', actualNews => actualNews.push(payload.url));
    }
    case REMOVE_URL_FROM_SELECTED: {
        return state.update('actualNews', actualNews => actualNews.filter(item => item !== payload.url));
    }
    default: {
        return state;
    }
    }
};
