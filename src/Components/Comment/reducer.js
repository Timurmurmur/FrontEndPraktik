import { PageStatus } from "../../common/typings";
import { LOAD_COMMENTS, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS, ADD_COMMENT, ADD_COMMENT_ERROR, ADD_COMMENT_SUCCESS } from "./actions";

const defaultAuthState = { pageStatus: PageStatus.LOADING };

export const comment = (state = defaultAuthState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      };
    case LOAD_COMMENTS_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      };
    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        comments: action.comments
      };
    case ADD_COMMENT:
      return {
        ...state,
      }
    case ADD_COMMENT_ERROR:
      return {
        ...state,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state
      }
    default:
      return state;
  }
};
