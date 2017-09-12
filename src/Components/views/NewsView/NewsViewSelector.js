import { createSelector } from 'reselect';

import NewsViewTexts from './NewsViewTexts.json';
import { getNews } from '../../../Features/News/News.js';

export default createSelector(
    [getNews],
    (news) => {
        // console.log(activeDate, isAddEditFormShown);
        return {
            title: NewsViewTexts.TITLE,
            description: NewsViewTexts.DESCRIPTION,
            news: news.toJS(),
            menuItems: [{ text: 'Calendar', id: 'CALENDAR', url: '/calendar' }, { text: 'News', id: 'NEWS', url: '/news' }],
        };
    });
