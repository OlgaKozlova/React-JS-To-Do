import { NEWS_URL, SAVE_NEWS, REMOVE_URL_FROM_SELECTED, ADD_URL_TO_SELECTED } from './NewsFeatureConstants.js';
import { getRequest } from './../../Services/RequestService.js';

const saveNews = news => ({
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

export const fetchNews = () => async (dispatch) => {
    const responce = await getRequest(NEWS_URL);
    const news = responce.articles;

    dispatch(saveNews(news));
};

