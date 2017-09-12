import { createSelector } from 'reselect';
import moment from 'moment';

import { reducerName } from './CalendarViewConstants.js';
import CalendarViewTexts from './CalendarViewTexts.json';

import { getAllToDoItems } from '../../../Features/ToDo/ToDoFeatureSelector.js';

const getActiveDate = state => state[reducerName].get('activeDate');
const getIsAddEditFormShown = state => state[reducerName].get('isAddEditFormShown');
export const getToDoItemTitle = state => state[reducerName].get('toDoItemTitle');
export const getToDoItemText = state => state[reducerName].get('toDoItemText');
export const getToDoItemDate = state => state[reducerName].get('toDoItemDate');
export const getToDoItemId = state => state[reducerName].get('toDoItemId');

function getWeeksRangeInMonth(momentObj) {
    const clonedMoment = moment(momentObj);
    const first = clonedMoment.startOf('month').week();
    let last = clonedMoment.endOf('month').week();
    const result = [];

    // In case last week is in next year
    if (first > last) {
        last = clonedMoment.weeksInYear() + last;
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
        isActive: day.isSame(activeDay, 'days'),
        isCurrent: day.isSame(moment(), 'days'),
        id: day.date(),
        label: day.date(),
        value: day,
        isHoliday: [5, 6].includes(day.day()),
        isInActiveMonth: activeDay.month() === day.month(),
    };
}

function getCalendarGrid(activeDate) {
    return getWeeksRangeInMonth(activeDate)
        .map(weekNum => new Array(7).fill(1)
            .map((item, dayInWeek) => getDay(weekNum, dayInWeek, activeDate)));
}

function getDaysOfWeek() {
    return moment.weekdaysShort().map(day => ({ id: day, label: day }));
}

function isFormValid(toDoItemDate, toDoItemTitle, toDoItemText) {
    return moment(toDoItemDate).isValid() && toDoItemText !== '' && toDoItemTitle !== '';
}

export default createSelector(
    [
        getActiveDate,
        getIsAddEditFormShown,
        getToDoItemDate,
        getToDoItemText,
        getToDoItemTitle,
        getAllToDoItems,
    ],
    (
        activeDate,
        isAddEditFormShown,
        toDoItemDate,
        toDoItemText,
        toDoItemTitle,
        allToDoItems,
    ) => ({
        // pageOptions
        title: CalendarViewTexts.TITLE,
        description: CalendarViewTexts.DESCRIPTION,
        menuItems: [
            { text: 'Calendar', id: 'CALENDAR', url: '/calendar' },
            { text: 'News', id: 'NEWS', url: '/news' },
        ],
        // Calendar Options
        calendarTitle: activeDate.format(CalendarViewTexts.CALENDAR_TITLE_FORMAT),
        weeks: getCalendarGrid(activeDate),
        dayOfWeeks: getDaysOfWeek(),
        // Add Edit To Do Form Options
        isAddEditFormShown,
        dateInputOptions: {
            value: toDoItemDate,
            label: CalendarViewTexts.DATE_INPUT_LABEL,
            prompt: CalendarViewTexts.DATE_INPUT_PROMPT,
        },
        titleInputOptions: {
            value: toDoItemTitle,
            label: CalendarViewTexts.TITLE_INPUT_LABEL,
            prompt: CalendarViewTexts.TITLE_INPUT_PROMPT,
        },
        textInputOptions: {
            value: toDoItemText,
            label: CalendarViewTexts.TEXT_INPUT_LABEL,
            prompt: CalendarViewTexts.TEXT_INPUT_PROMPT,
        },
        deleteToBoItemButtonLabel: CalendarViewTexts.DELETE_TO_DO_ITEM_BUTTON_LABEL,
        editToBoItemButtonLabel: CalendarViewTexts.EDIT_TO_DO_ITEM_BUTTON_LABEL,
        addToDoButtonLabel: CalendarViewTexts.ADD_TO_DO_BUTTON_LABEL,
        saveToDoItemButtonLabel: CalendarViewTexts.SAVE_TO_DO_ITEM_BUTTON_LABEL,
        isSaveToBoItemButtonDisabled: !isFormValid(toDoItemDate, toDoItemTitle, toDoItemText),
        cancelToDoItemButtonLabel: CalendarViewTexts.CANCEL_TO_DO_ITEM_BUTTON_LABEL,
        // To Do Items List Options
        toDoItems: allToDoItems.toList().toJS(),
        previousButtonLabel: CalendarViewTexts.PREVIOUS_BUTTON_LABEL,
        nextButtonLabel: CalendarViewTexts.NEXT_BUTTON_LABEL,
    }));
