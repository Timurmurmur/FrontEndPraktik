import { PageStatus } from "../../common/typings";
import { LOAD_USER_POSTS, LOAD_USER_POSTS_ERROR, LOAD_USER_POSTS_SUCCESS } from './actions';

const defaultAuthState = { pageStatus: PageStatus.LOADING };

export const profile = (state = defaultAuthState, action) => {
  switch (action.type) {
    case LOAD_USER_POSTS:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      };
    case LOAD_USER_POSTS_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      };
    case LOAD_USER_POSTS_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        posts: action.posts
      };
    default:
      return state;
  }
};
