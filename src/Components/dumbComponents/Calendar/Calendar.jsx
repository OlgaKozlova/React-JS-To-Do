import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Row from '../../layoutComponents/Row/Row.jsx';
import Column from '../../layoutComponents/Column/Column.jsx';

const styles = {
    calendar: {
        backgroundColor: 'white',
    },
};

const Calendar = props => (
    <div className={props.classes.calendar}>
        <Row>
            <Column>
                <div role="button" tabIndex="0" onClick={props.onNextMonthClick}>Previous</div>
            </Column>
            <Column>
                <div >{props.title}</div>
            </Column>
            <Column>
                <div role="button" tabIndex="0" onClick={props.onPreviousMonthClick}>Next</div>
            </Column>
        </Row>
        <Row>
            {
                props.dayOfWeeks.map(dayOfWeek => (<Column key={dayOfWeek.id}>
                    <div>{ dayOfWeek.label }</div>
                </Column>))
            }
        </Row>
        {
            props.weeks.map((week, index) => (<Row key={index.toString()}>
                {
                    week.map(dayOfWeek => (<Column key={dayOfWeek.id}>
                        <div
                            role="button"
                            tabIndex="0"
                            onClick={() => props.onDayClick(dayOfWeek.value)}
                        >{ dayOfWeek.label }</div>
                    </Column>))
                }
            </Row>))
        }
    </div>
);

Calendar.propTypes = {
    title: PropTypes.string.isRequired,
    dayOfWeeks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    weeks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
    onNextMonthClick: PropTypes.func.isRequired,
    onPreviousMonthClick: PropTypes.func.isRequired,
    onDayClick: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Calendar);
