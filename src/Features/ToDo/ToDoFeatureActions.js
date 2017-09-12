import { ADD_TO_DO, ADD_TO_DOS, REMOVE_TO_DO } from './ToDoFeatureConstants.js';

export const addToDosToState = toDos => ({
    type: ADD_TO_DOS,
    payload: {
        toDos,
    },
});


export const addToDoToState = toDo => ({
    type: ADD_TO_DO,
    payload: {
        toDo,
    },
});

export const removeToDoFromState = id => ({
    type: REMOVE_TO_DO,
    payload: {
        id,
    },
});

