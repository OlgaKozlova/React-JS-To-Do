import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    calendarContainer: {
        backgroundColor: '#373C4F',
    },
};

const CalendarContainer = props => (<div className={props.classes.calendarContainer}>
    { props.children }
</div>);

CalendarContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(CalendarContainer);
