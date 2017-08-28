import React from 'react';
import { connect } from 'react-redux';
import CalendarViewTexts from './CalendarViewTexts.json';

import CalendarViewActions from './CalendarViewActions';
import CalendarViewSelector from './CalendarViewSelector';

const getCalendar = calendar => calendar.map(week => week.map(day => (<div>
    <div color={day.isHoliday ? 'red' : 'black'}>{ day.dayNumber }</div>
</div>)));

export default connect(CalendarViewActions, CalendarViewSelector)(props => (<div>
    <div> { CalendarViewTexts.TITLE }</div>
    <div> { CalendarViewTexts.DESCRIPTION }</div>
    { getCalendar(props.calendar) }
    <button>{CalendarViewTexts.SAVE_BUTTON_LABEL}</button>
</div>));