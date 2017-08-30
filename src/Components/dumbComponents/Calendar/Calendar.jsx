import React from 'react';
import PropTypes from 'prop-types';

const Calendar = props => (<div>
    <div>&lt</div>
    <div>{props.title}</div>
    <div>&gt</div>
    {
        props.weeks.map(week => week.map(day => (<div>
            <div color={day.isHoliday ? 'red' : 'black'}>{ day.dayNumber }</div>
        </div>)))
    }
</div>);

Calendar.propTypes = {
    title: PropTypes.string.isRequired,
    weeks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

export default Calendar;
