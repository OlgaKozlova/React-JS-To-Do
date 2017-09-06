import { NEWS_URL, SAVE_NEWS, REMOVE_URL_FROM_SELECTED, ADD_URL_TO_SELECTED } from './NewsFeatureConstants.js';
import { getRequest } from './../../Services/RequestService.js';

const saveNews = news => ({
    type: SAVE_NEWS,
    payload: {
        news,
    },
});

export const selectNewItem = url => ({
    type: ADD_URL_TO_SELECTED,
    payload: {
        url,
    },
});

export const deselectNewItem = url => ({
    type: REMOVE_URL_FROM_SELECTED,
    payload: {
        url,
    },
});

export const fetchNews = () => async (dispatch) => {
    const news = await getRequest(NEWS_URL);

    dispatch(saveNews(news));
};

