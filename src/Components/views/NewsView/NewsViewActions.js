import { selectNewItem, deselectNewItem, getNews } from '../../../Features/News/News.js';

export default {
    toggleIsItemSelected: id => (dispatch, getState) => {
        const allNews = getNews(getState());
        const newsItem = allNews.find(item => item.id === id);
        if (newsItem) {
            if (newsItem.isSelected) {
                dispatch(deselectNewItem(id));
            } else {
                dispatch(selectNewItem(id));
            }
        }
    },
};
