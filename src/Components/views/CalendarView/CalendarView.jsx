import React from 'react';
import { connect } from 'react-redux';
import CalendarViewTexts from './CalendarViewTexts.json';

import CalendarViewActions from './CalendarViewActions.js';
import CalendarViewSelector from './CalendarViewSelector.js';

import Header from '../../dumbComponents/Header/Header.jsx';
import Menu from '../../dumbComponents/Menu/Menu.jsx';
import Calendar from '../../dumbComponents/Calendar/Calendar.jsx';

export default connect(CalendarViewSelector, CalendarViewActions)(props => (<div>
    <Header
        title={CalendarViewTexts.TITLE}
        description={CalendarViewTexts.DESCRIPTION}
    />
    <Menu
        menuItems={props.menuItems}
    />
    <Calendar
        title="Today"
        weeks={props.weeks}
    />
</div>));
