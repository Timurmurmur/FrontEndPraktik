import React from 'react';
import './App.css';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware
} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initializeCurrentLocation,
  State as RouterState,
  Fragment,
  RouterActions,
  Link,
} from "redux-little-router";
import {
  combineEpics,
  createEpicMiddleware,
  Epic,
  EpicMiddleware
} from "redux-observable";
import { middleware,routesMiddleware, reducer as router, enhancer } from './router';
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux';

import Navbar from '../Navbar/Navbar';

const createMiddleware = (
  epicMiddleware
) => applyMiddleware(middleware, epicMiddleware, routesMiddleware);

export const App =() => {
  const history = createBrowserHistory();
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
    }
  });

  const store = createStore(
    combineReducers({ router }),
    composeEnhancers(enhancer, createMiddleware(epicMiddleware))
  );
  epicMiddleware.run(combineEpics());

  const initialState = store.getState();

  if (initialState && initialState.router) {
    store.dispatch(initializeCurrentLocation(initialState.router));
  }


  return (
    <Provider store={store}>
      <Fragment forRoute="/">
        <>
          <Navbar />
          <h1>Hello world</h1>
          <h2>Vlad</h2>
        </>
      </Fragment>
    </Provider>
  );
}
