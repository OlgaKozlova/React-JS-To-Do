import { push } from 'react-router-redux';
import { selectNewsItem, deselectNewsItem, getNews, fetchNews } from '../../../Features/News/News.js';

export default {
    toggleIsItemSelected: id => (dispatch, getState) => {
        const allNews = getNews(getState());
        const newsItem = allNews.find(item => item.id === id);
        if (newsItem) {
            if (newsItem.isSelected) {
                dispatch(deselectNewsItem(id));
            } else {
                dispatch(selectNewsItem(id));
            }
        }
    },
    handleMenuItemClick: url => (dispatch) => {
        dispatch(push(url));
    },
};
