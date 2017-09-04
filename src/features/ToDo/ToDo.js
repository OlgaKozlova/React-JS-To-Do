import uuid from 'uuid';
import { save, remove } from '../../Services/StorageService.js';
import ToDoModel from './ToDoModel.js';
import { addToDoToState, removeToDoFromState } from './ToDoFeatureActions.js';

export { getAllToDoItems } from './ToDoFeatureSelector.js';

export const addToDo = (date, text, title) => (dispatch) => {
    const id = uuid.v4();
    const ToDo = new ToDoModel(id, date, text, title);
    save(id, ToDo);
    dispatch(addToDoToState(ToDo));
};

export const deleteToDo = id => (dispatch) => {
    remove(id);
    dispatch(removeToDoFromState(id));
};
