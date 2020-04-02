import { PageStatus } from "../../common/typings";
import { LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR, LOAD_POSTS_BY_TITLE, LOAD_POSTS_BY_TITLE_SUCCESS, LOAD_POSTS_BY_TITLE_ERROR } from './actions';

const defaultAuthState = { pageStatus: PageStatus.LOADED };

export const main = (state = defaultAuthState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      };
    case LOAD_POSTS_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      };
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        posts: action.posts
      };
    case LOAD_POSTS_BY_TITLE:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      };
    case LOAD_POSTS_BY_TITLE_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        posts: action.posts
      };
    case LOAD_POSTS_BY_TITLE_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      }
    default:
      return state;
  }
};
