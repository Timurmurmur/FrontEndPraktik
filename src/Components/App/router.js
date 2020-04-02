import {
  LOCATION_CHANGED,
  routerForBrowser,
  GO_BACK,
  goBack,
  go,
} from "redux-little-router";
import {
  Dispatch,
  Middleware,
  MiddlewareAPI,
  Reducer,
  combineReducers
} from "redux";
import { Action, State } from "./App";
import { changeLocation } from '../../common/helpers';

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
  '/article': {
    title: 'Список статей',
    '/new': {
      title: 'Новая статья'
    },
    '/:id': {
      title: 'Статья'
    }
  }
};

export const routesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOCATION_CHANGED: {
      const { result } = action.payload;
      if (result && result.title) {
        document.title = result.title;
      }
      if (localStorage.getItem('token') === null && action.payload.pathname !== '/reg'){
        console.log(action.payload)
        action.payload.pathname = "/auth"
      }
      break;
    }
    default:
      break;
  }

  return next(action);
};

export const { reducer, enhancer, middleware } = routerForBrowser({ routes });
