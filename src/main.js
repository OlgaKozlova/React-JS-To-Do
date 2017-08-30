import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import App from './Components/App.jsx';

ReactDOM.render(
    // eslint-disable-next-line
    <Provider store={createStore(combineReducers(reducers))}>
        <App />
    </Provider>,
    window.document.getElementById('world'),
);
