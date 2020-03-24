import {
  LOCATION_CHANGED,
  routerForBrowser,
  GO_BACK,
  goBack
} from "redux-little-router";
import {
  Dispatch,
  Middleware,
  MiddlewareAPI,
  Reducer,
  combineReducers
} from "redux";
import { Action, State } from "./App";

const routes = {
  '/': {
    title: 'Главная'
  },
  '/auth': {
    title: 'Авторизация'
  },
  '/reg': {
    title: 'Регистрация'
  },
  '/profile': {
    title: 'Профиль'
  },
  '/current/:id': {
    title: 'Статья '
  }
};

export const routesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOCATION_CHANGED: {
      const { result } = action.payload;
      if (result && result.title) {
        document.title = result.title;
      }
      break;
    }
    default:
      break;
  }

  return next(action);
};

export const { reducer, enhancer, middleware } = routerForBrowser({ routes });
