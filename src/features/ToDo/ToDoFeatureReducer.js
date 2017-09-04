import Immutable from 'immutable';
import { ADD_TO_DO, REMOVE_TO_DO } from './ToDoFeatureConstants.js';

export const initialState = Immutable.Map({});

export const ToDoFeatureReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
    case ADD_TO_DO: {
        return state.set(payload.toDo.id, payload.toDo);
    }
    case REMOVE_TO_DO: {
        return state.delete(payload.id);
    }
    default: {
        return state;
    }
    }
};
