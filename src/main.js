import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import * as reducers from './reducers';
import CalendarView from './Components/views/CalendarView/CalendarView.jsx';
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history);


const store = createStore(
    combineReducers(
        {
            ...reducers,
            routing: routerReducer,
        },
    ),
    applyMiddleware(rMiddleware, logger, thunk),
);

ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/calendar" component={CalendarView} />
                <Route path="/" component={CalendarView} />
            </div>
        </ConnectedRouter>
    </Provider>,
    window.document.getElementById('app'),
);
