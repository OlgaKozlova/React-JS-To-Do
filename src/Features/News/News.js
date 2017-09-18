import { NEWS_URL } from './NewsFeatureConstants.js';
import { getRequest } from './../../Services/RequestService.js';
import { saveNews } from './NewsFeatureActions.js';

export { selectNewsItem, deselectNewsItem, saveNews } from './NewsFeatureActions.js';
export { getNews } from './NewsFeatureSelector.js';

export const initNewsFeature = () => async (dispatch) => {
    const responce = await getRequest(NEWS_URL);
    const news = responce.articles;

    dispatch(saveNews(news));
};

