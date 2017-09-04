import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import ToDoListItem from '../../dumbComponents/ToDoListItem/ToDoListItem.jsx';

const styles = {
    toDoList: {
        padding: '20px',
    },
};

const ToDoList = props => (<div className={props.classes.toDoList}>
    {
        props.items.map(item => (<ToDoListItem
            key={item.id}
            date={item.date}
            text={item.text}
            title={item.title}
            isDone={item.isDone}
            onDelete={props.onDelete}
        />))
    }
</div>);

ToDoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(ToDoList);
