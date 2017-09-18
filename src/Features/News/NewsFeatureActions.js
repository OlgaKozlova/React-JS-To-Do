import { SAVE_NEWS, REMOVE_URL_FROM_SELECTED, ADD_URL_TO_SELECTED } from './NewsFeatureConstants.js';

export const saveNews = news => ({
    type: SAVE_NEWS,
    payload: {
        news,
    },
});

export const selectNewsItem = url => ({
    type: ADD_URL_TO_SELECTED,
    payload: {
        url,
    },
});

export const deselectNewsItem = url => ({
    type: REMOVE_URL_FROM_SELECTED,
    payload: {
        url,
    },
});

