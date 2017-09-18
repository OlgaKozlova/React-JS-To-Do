import Immutable from 'immutable';
import { ADD_TO_DO, ADD_TO_DOS, REMOVE_TO_DO } from './ToDoFeatureConstants.js';

export const initialState = Immutable.fromJS({});

export const ToDoFeatureReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
    case ADD_TO_DO: {
        return state.set(payload.toDo.id, payload.toDo);
    }
    case ADD_TO_DOS: {
        const toDos = Immutable.List(payload.toDos.map(item => [item.id, item]));
        return Immutable.Map(toDos);
    }
    case REMOVE_TO_DO: {
        return state.delete(payload.id);
    }
    default: {
        return state;
    }
    }
};
