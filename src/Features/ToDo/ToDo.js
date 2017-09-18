import uuid from 'uuid';
import { save, remove, getItemsOfType } from '../../Services/StorageService.js';
import { ToDoType, ToDoModel } from './ToDoModel.js';
import { addToDoToState, addToDosToState, removeToDoFromState } from './ToDoFeatureActions.js';

import { getAllToDoItems } from './ToDoFeatureSelector.js';

export const getToDoById = (id, state) => getAllToDoItems(state).find(i => i.id === id) || {};

const getIdForSave = id => `${ToDoType}_${id || uuid.v4()}`;

export const addToDo = (id, date, text, title) => (dispatch) => {
    const idToSave = getIdForSave(id);
    const ToDo = new ToDoModel(idToSave, date, text, title);
    save(idToSave, ToDo);
    dispatch(addToDoToState(ToDo));
};

export const editToDo = (id, date, text, title) => (dispatch) => {
    const ToDo = new ToDoModel(id, date, text, title);
    save(id, ToDo);
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
