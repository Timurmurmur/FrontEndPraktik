import { PageStatus } from "../../common/typings";
import { LOAD_POST, LOAD_POST_ERROR, LOAD_POST_SUCCESS } from "./actions";

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
    default:
      return state;
  }
};
