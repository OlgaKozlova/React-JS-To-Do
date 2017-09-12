import uuid from 'uuid';
import { save, remove, getItemsOfType } from '../../Services/StorageService.js';
import { ToDoType, ToDoModel } from './ToDoModel.js';
import { addToDoToState, addToDosToState, removeToDoFromState } from './ToDoFeatureActions.js';

export { getAllToDoItems } from './ToDoFeatureSelector.js';

const getIdForSave = id => `${ToDoType}_${id || uuid.v4()}`;

export const upsertToDo = (id, date, text, title) => (dispatch) => {
    const idToSave = getIdForSave(id);
    const ToDo = new ToDoModel(idToSave, date, text, title);
    save(idToSave, ToDo);
    dispatch(addToDoToState(ToDo));
};

export const deleteToDo = id => (dispatch) => {
    remove(id);
    dispatch(removeToDoFromState(id));
};

export const initToDoFeature = () => (dispatch) => {
    const toDoItems = getItemsOfType(ToDoType);
    dispatch(addToDosToState(toDoItems));
};
