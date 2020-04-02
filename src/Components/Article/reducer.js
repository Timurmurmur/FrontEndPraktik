import { PageStatus } from "../../common/typings";
import { LOAD_POST, LOAD_POST_ERROR, LOAD_POST_SUCCESS, CHANGE_ARTICLE, CHANGE_ARTICLE_SUCCESS, CHANGE_ARTICLE_ERROR, DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_ERROR } from "./actions";

const defaultAuthState = { pageStatus: PageStatus.LOADING };

export const article = (state = defaultAuthState, action) => {
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        pageStatus: PageStatus.LOADING,
      };
    case LOAD_POST_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      };
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        post: action.post
      };
    case CHANGE_ARTICLE:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      }
    case CHANGE_ARTICLE_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        post: action.post
      }
    case CHANGE_ARTICLE_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      }
    case DELETE_ARTICLE:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      }
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
      }
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR
      }
    default:
      return state;
  }
};
