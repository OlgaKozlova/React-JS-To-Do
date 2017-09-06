import React from 'react';
import { connect } from 'react-redux';

import CalendarViewActions from './CalendarViewActions.js';
import CalendarViewSelector from './CalendarViewSelector.js';

import Row from '../../layoutComponents/Row/Row.jsx';
import Column from '../../layoutComponents/Column/Column.jsx';
import View from '../../layoutComponents/View/View.jsx';

import Header from '../../dumbComponents/Header/Header.jsx';
import Menu from '../../dumbComponents/Menu/Menu.jsx';
import CalendarContainer from '../../dumbComponents/CalendarContainer/CalendarContainer.jsx';
import Calendar from '../../dumbComponents/Calendar/Calendar.jsx';
import ToDoList from '../../dumbComponents/ToDoList/ToDoList.jsx';
import Button from '../../dumbComponents/Button/Button.jsx';
import Input from '../../dumbComponents/Input/Input.jsx';

export default connect(CalendarViewSelector, CalendarViewActions)(props => (<View>
    <Row>
        <Column>
            <Header
                title={props.title}
                description={props.description}
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
                    onNextMonthClick={props.incrementMonth}
                    onPreviousMonthClick={props.decrementMonth}
                    onDayClick={day => props.setActiveDay(day)}
                    title={props.calendarTitle}
                    weeks={props.weeks}
                    dayOfWeeks={props.dayOfWeeks}
                />
            </CalendarContainer>
        </Column>
        <Column>
            <ToDoList
                items={props.toDoItems}
                onDelete={props.deleteToDoItem}
            />
            {
                props.isAddEditFormShown
                    ? <Row>
                        <Row>
                            <Input
                                type="date"
                                value={props.dateInputOptions.value}
                                label={props.dateInputOptions.label}
                                prompt={props.dateInputOptions.prompt}
                                onChange={e => props.changeToDoItemDate(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <Input
                                type="text"
                                label={props.titleInputLabel}
                                prompt={props.titleInputPrompt}
                                value={props.toDoItemTitle}
                                onChange={e => props.changeToDoItemTitle(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <Input
                                type="text"
                                label={props.textInputLabel}
                                prompt={props.textInputPrompt}
                                value={props.toDoItemText}
                                onChange={e => props.changeToDoItemText(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <Column>
                                <Button
                                    label={props.saveToDoItemButtonLabel}
                                    onClick={props.saveToDoItem}
                                />
                            </Column>
                            <Column>
                                <Button
                                    label={props.cancelToDoItemButtonLabel}
                                    onClick={props.cancelSaveToDoItem}
                                />
                            </Column>
                        </Row>
                    </Row>
                    : null
            }
            <Button
                label={props.addToDoButtonLabel}
                onClick={() => props.openAddEditToDoItemForm(null)}
            />
        </Column>
    </Row>
</View>));
