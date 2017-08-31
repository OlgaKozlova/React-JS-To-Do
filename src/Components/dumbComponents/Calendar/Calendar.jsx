import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    };


const Calendar = props => (<div>
    {
        props.weeks.map(week => week.map(day => (<div>
            <div color={day.isHoliday ? 'red' : 'black'}>{ day.dayNumber }</div>
        </div>)))
    }
</div>);

Calendar.propTypes = {
    title: PropTypes.string.isRequired,
    weeks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default injectSheet(styles)(Calendar);
