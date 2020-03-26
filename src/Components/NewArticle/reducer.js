import { PageStatus } from "../../common/typings";
import { ADD_ARTICLE, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_ERROR } from "./actions";

const defaultAuthState = { pageStatus: PageStatus.LOADED };

export const newArticle = (state = defaultAuthState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        pageStatus: PageStatus.LOADING,
        article: action.article
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED
      };
    case ADD_ARTICLE_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      };
    default:
      return state;
  }
};
