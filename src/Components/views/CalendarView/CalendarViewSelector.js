import { createSelector } from 'reselect';
import moment from 'moment';

import { reducerName } from './CalendarViewConstants.js';
import CalendarViewTexts from './CalendarViewTexts.json';

const getActiveDate = state => state[reducerName].get('activeDate');
const getIsAddEditFormShown = state => state[reducerName].get('isAddEditFormShown');
const getToDoItemTitle = state => state[reducerName].get('toDoItemTitle');
const getToDoItemText = state => state[reducerName].get('toDoItemText');
const getToDoItemDate = state => state[reducerName].get('toDoItemDate');

function getWeeksRangeInMonth(momentObj) {
    const clonedMoment = moment(momentObj);
    const first = clonedMoment.startOf('month').week();
    let last = clonedMoment.endOf('month').week();
    const result = [];

    // In case last week is in next year
    if (first > last) {
        last = first + last;
    }

    for (let i = first; i <= last; i += 1) {
        result.push(i);
    }
    return result;
}

function getDay(weekInMonth, dayInWeek, activeDay) {
    const clonedMoment = moment(activeDay);
    const day = clonedMoment.week(weekInMonth).day(dayInWeek);

    return {
        id: day.date(),
        label: day.date(),
        value: day,
        isHoliday: [5, 6].includes(day.day()),
        isInActiveMonth: activeDay.month() === day.month(),
    };
}

export default createSelector(
    [getActiveDate, getIsAddEditFormShown, getToDoItemDate, getToDoItemText, getToDoItemTitle],
    (activeDate, isAddEditFormShown, toDoItemDate, toDoItemText, toDoItemTitle) => {
        // console.log(activeDate, isAddEditFormShown);
        return {
            title: CalendarViewTexts.TITLE,
            description: CalendarViewTexts.DESCRIPTION,
            toDoItemTitle,
            toDoItemText,
            toDoItemDate,
            isAddEditFormShown,
            calendarTitle: 'Calendar',
            weeks: getWeeksRangeInMonth(activeDate)
                .map(weekNum => new Array(7).fill(1).map((item, dayInWeek) =>
                    getDay(weekNum, dayInWeek, activeDate))),
            dayOfWeeks: moment.weekdaysShort().map(day => ({ id: day, label: day })),
            menuItems: [{ text: 'Calendar', id: 'CALENDAR' }, { text: 'News', id: 'NEWS' }],
            todos: [],
            news: [],
        };
    });
