import { createSelector } from 'reselect';
import { reducerName } from './NewsFeatureConstants.js';

const getSelectedNewsUrls = state => state[reducerName].selectedNewsUrls;
const getActualNews = state => state[reducerName].actualNews;

export const getNews = createSelector(
    [getSelectedNewsUrls, getActualNews],
    (selectedNewsUrls, actualNews) =>
        actualNews.map(newsItem => ({
            ...newsItem,
            id: newsItem.url,
            isSelected: selectedNewsUrls.includes(newsItem.url),
        })),
);

