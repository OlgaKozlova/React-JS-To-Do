import { createSelector } from 'reselect';
import { reducerName } from './NewsFeatureConstants.js';

const getSelectedNewsUrls = state => state[reducerName].get('selectedNewsUrls');
const getActualNews = state => state[reducerName].get('actualNews');

export const getNews = createSelector(
    [getSelectedNewsUrls, getActualNews],
    (selectedNewsUrls, actualNews) =>
        actualNews.map(newsItem => ({
            ...newsItem,
            id: newsItem.url,
            isSelected: selectedNewsUrls.includes(newsItem.url),
        })),
);

