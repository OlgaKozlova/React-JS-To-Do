import React from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import * as reducers from './reducers';
import CalendarView from './Components/views/CalendarView/CalendarView.jsx';
import NewsView from './Components/views/NewsView/NewsView.jsx';
import { initToDoFeature } from './Features/ToDo/ToDo.js';
import { initNewsFeature } from './Features/News/News.js';

const history = createHistory();
const rMiddleware = routerMiddleware(history);
const logger = createLogger({
    stateTransformer: (state) => {
        const newState = {};

        Object.keys(state).forEach((key) => {
            if (Immutable.Iterable.isIterable(state[key])) {
                newState[key] = state[key].toJS();
            } else {
                newState[key] = state[key];
            }
        });

        return newState;
    },
});
const store = createStore(
    combineReducers(
        {
            ...reducers,
            routing: routerReducer,
        },
    ),
    applyMiddleware(rMiddleware, thunk, logger),
);

store.dispatch(initToDoFeature());
store.dispatch(initNewsFeature());

ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/calendar" component={CalendarView} />
                    <Route exact path="/news" component={NewsView} />
                    <Redirect from="/" exact to="/calendar" />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    window.document.getElementById('app'),
);
