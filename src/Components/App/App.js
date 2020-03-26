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
import { MainContainer } from '../Main/MainContainer';
import { main } from '../Main/reducer';
import { mainEpics } from '../Main/epics';
import { MainDataProvider } from '../../api/MainDataProvider';
import { ArticleDataProvider } from '../../api/ArticleDataProvider';
import { articleEpics } from '../Article/epics';
import { article } from '../Article/reducer';
import { ArticleContainer } from '../Article/ArticleContainer';
import { ProfileDataProvider } from '../../api/ProfileDataProvider';
import { profileEpics } from '../Profile/epics';
import { profile } from '../Profile/reducer';
import { ProfileContainer } from '../Profile/ProfileContainer';
import { NewArticle } from '../NewArticle/NewArticle';
import { newArticle } from '../NewArticle/reducer';
import { newArticleEpics } from '../NewArticle/epics';
import { NewArticleContainer } from '../NewArticle/NewArticleContainer';

const createMiddleware = (
  epicMiddleware
) => applyMiddleware(middleware, epicMiddleware, routesMiddleware);

export const App = (props) => {
  const history = createBrowserHistory();
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      authDataProvider: new AuthDataProvider(host),
      regDataProvider: new RegDataProvider(host),
      mainDataProvider: new MainDataProvider(host),
      articleDataProvider: new ArticleDataProvider(host),
      profileDataProvider: new ProfileDataProvider(host)
    }
  });

  const store = createStore(
    combineReducers({ router, auth, reg, main, article, profile, newArticle }),
    composeEnhancers(enhancer, createMiddleware(epicMiddleware))
  );
  epicMiddleware.run(combineEpics( authEpics, regEpics, mainEpics, articleEpics, profileEpics, newArticleEpics));

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
            <ProfileContainer />
          </div>
        </Fragment>
        <Fragment forRoute="/article">
          <div className="container">
            <Navbar/>
            <div className="mainContainer">
              <Fragment forRoute="/new">
                <NewArticleContainer />
              </Fragment>
              <Fragment forRoute="/:id">
                <ArticleContainer />
              </Fragment>
            </div>

          </div>
        </Fragment>
        <Fragment forRoute="/">
          <div className="container">
            <Navbar />
            <MainContainer />
          </div>
        </Fragment>
        </>
      </Fragment>
    </Provider>
  );
}
