export const ADD_ARTICLE = "ADD_ARTICLE";


export const addArticle = (article) => {
  return{
    type: ADD_ARTICLE,
    article
  }
}

export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";

export const addArticleSuccess = () => {
  return{
    type: ADD_ARTICLE_SUCCESS
  }
}

export const ADD_ARTICLE_ERROR = "ADD_ARTICLE_ERROR";

export const addArticleError = (err) => {
  return {
    type: ADD_ARTICLE_ERROR,
    err
  }
}