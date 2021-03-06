import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Row from '../../layoutComponents/Row/Row.jsx';
import Column from '../../layoutComponents/Column/Column.jsx';

const styles = {
    toDoListItem: {
        padding: '20px',
    },
};

const ToDoListItem = props => (<div className={props.classes.toDoListItem}>
    <Row>
        <Column>
            <div>{props.date}</div>
        </Column>
        <Column>
            <div>{props.title}</div>
        </Column>
        <Column>
            <div>{props.text}</div>
        </Column>
        <Column>
            <div>{props.isDone}</div>
        </Column>
        <Column>
            <div
                role="button"
                tabIndex={0}
                onClick={() => props.onEdit(props.id)}
            >
                {props.editButtonLabel}
            </div>
        </Column>
        <Column>
            <div
                role="button"
                tabIndex={0}
                onClick={() => props.onDelete(props.id)}
            >
                {props.deleteButtonLabel}
            </div>
        </Column>
    </Row>
</div>);

ToDoListItem.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    editButtonLabel: PropTypes.string.isRequired,
    deleteButtonLabel: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(ToDoListItem);
