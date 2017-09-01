import React from 'react';
import { connect } from 'react-redux';
import CalendarViewTexts from './CalendarViewTexts.json';

import CalendarViewActions from './CalendarViewActions.js';
import CalendarViewSelector from './CalendarViewSelector.js';

import Row from '../../layoutComponents/Row/Row.jsx';
import Column from '../../layoutComponents/Column/Column.jsx';
import View from '../../layoutComponents/View/View.jsx';

import Header from '../../dumbComponents/Header/Header.jsx';
import Menu from '../../dumbComponents/Menu/Menu.jsx';
import CalendarContainer from '../../dumbComponents/CalendarContainer/CalendarContainer.jsx';
import Calendar from '../../dumbComponents/Calendar/Calendar.jsx';

export default connect(CalendarViewSelector, CalendarViewActions)(props => (<View>
    <Row>
        <Column>
            <Header
                title={CalendarViewTexts.TITLE}
                description={CalendarViewTexts.DESCRIPTION}
            />
        </Column>
    </Row>
    <Row>
        <Column>
            <Menu
                menuItems={props.menuItems}
            />
        </Column>
    </Row>
    <Row>
        <Column>
            <CalendarContainer>
                <Calendar
                    title={props.title}
                    weeks={props.weeks}
                    dayOfWeeks={props.dayOfWeeks}
                />
            </CalendarContainer>
        </Column>
    </Row>
</View>));
