import { createSelector } from 'reselect';
import moment from 'moment';

import { reducerName } from './NewsViewConstants.js';
import NewsViewTexts from './NewsViewTexts.json';

export default createSelector(
    [],
    (activeDate, isAddEditFormShown, toDoItemDate, toDoItemText, toDoItemTitle, allToDoItems) => {
        // console.log(activeDate, isAddEditFormShown);
        return {
            title: CalendarViewTexts.TITLE,
            description: CalendarViewTexts.DESCRIPTION,
            toDoItemTitle,
            toDoItemText,
            toDoItemDate,
            isAddEditFormShown,
            addToDoButtonLabel: 'New To Do',
            saveToDoItemButtonLabel: 'Save',
            cancelToDoItemButtonLabel: 'Cancel',
            calendarTitle: activeDate.format('MMMM YYYY'),
            weeks: getWeeksRangeInMonth(activeDate)
                .map(weekNum => new Array(7).fill(1).map((item, dayInWeek) =>
                    getDay(weekNum, dayInWeek, activeDate))),
            dayOfWeeks: moment.weekdaysShort().map(day => ({ id: day, label: day })),
            menuItems: [{ text: 'Calendar', id: 'CALENDAR' }, { text: 'News', id: 'NEWS' }],
            toDoItems: allToDoItems.toArray(),
        };
    });
