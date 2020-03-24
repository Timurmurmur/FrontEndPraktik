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
import { Profile } from '../Profile/Profile';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
import { Main } from '../Main/Main';
import { Article } from '../Article/Article';
import { AuthDataProvider } from '../../api/AuthDataProvider';
import { host } from '../../common/constants';
import { auth } from '../Auth/reducer';
import { authEpics } from '../Auth/epics';
import { AuthContainer } from '../Auth/AuthContainer';
import { RegDataProvider } from '../../api/RegDataProvider';
import { RegContainer } from '../Reg/RegContainer';
import { reg } from '../Reg/reducer';
import { regEpics } from '../Reg/epics';

const createMiddleware = (
  epicMiddleware
) => applyMiddleware(middleware, epicMiddleware, routesMiddleware);

export const App = (props) => {
  const history = createBrowserHistory();
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      authDataProvider: new AuthDataProvider(host),
      regDataProvider: new RegDataProvider(host)
    }
  });

  const store = createStore(
    combineReducers({ router, auth, reg }),
    composeEnhancers(enhancer, createMiddleware(epicMiddleware))
  );
  epicMiddleware.run(combineEpics( authEpics, regEpics ));

  const initialState = store.getState();

  if (initialState && initialState.router) {
    store.dispatch(initializeCurrentLocation(initialState.router));
  }


  return (
    <Provider store={store}>
      <Fragment forRoute="/">
        <>
        <Fragment forRoute="/reg">
          <RegContainer />
        </Fragment>
        <Fragment forRoute="/auth">
          <AuthContainer />
        </Fragment>
        <Fragment forRoute="/profile">
          <div className="container">
            <Navbar />
            <Profile />
          </div>
        </Fragment>
        <Fragment forRoute="/current/:id">
          <div className="container">
            <Navbar/>
            <div className="mainContainer">
              <Article/>
            </div>
          </div>
        </Fragment>
        <Fragment forRoute="/">
          <div className="container">
            <Navbar />
            <Main />
          </div>
        </Fragment>
        </>
      </Fragment>
    </Provider>
  );
}
