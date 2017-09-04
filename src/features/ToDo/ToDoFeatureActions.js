import { ADD_TO_DO, REMOVE_TO_DO } from './ToDoFeatureConstants.js';

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

