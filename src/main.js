import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import * as reducers from './reducers';
import CalendarView from './Components/views/CalendarView/CalendarView.jsx';

const history = createHistory();
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
                <Switch>
                    <Route exact path="/calendar" component={CalendarView} />
                    <Route exact path="/news" component={CalendarView} />
                    <Redirect from="/" exact to="/calendar" />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    window.document.getElementById('app'),
);
