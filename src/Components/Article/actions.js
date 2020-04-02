export const LOAD_POST = "LOAD_POST";


export const loadPost = (post_id) => {
  return {
    type: LOAD_POST,
    post_id
  }
}


export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";

export const loadPostSuccess = (post) => {
  return {
    type: LOAD_POST_SUCCESS,
    post
  }
}


export const LOAD_POST_ERROR = "LOAD_POST_ERROR";

export const loadPostError = (error) => {
  return {
    type: LOAD_POST_ERROR,
    error
  }
}


export const CHANGE_ARTICLE = "CHANGE_ARTICLE";


export const changeArticle = (article, id) => {
  return {
    type: CHANGE_ARTICLE,
    article,
    id
  }
}


export const CHANGE_ARTICLE_SUCCESS = "CHANGE_ARTICLE_SUCCESS";


export const changeArticleSuccess = (post) => {
  return {
    type: CHANGE_ARTICLE_SUCCESS,
    post
  }
}

export const CHANGE_ARTICLE_ERROR = "CHANGE_ARTICLE_ERROR";


export const changeArticleError = (error) => {
  return {
    type: CHANGE_ARTICLE_ERROR,
    error
  }
}


export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const deleteArticle = (id) => {
  return {
    type: DELETE_ARTICLE,
    id
  }
}

export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";

export const deleteArticleSuccess = () => {
  return {
    type: DELETE_ARTICLE_SUCCESS
  }
}

export const DELETE_ARTICLE_ERROR = "DELETE_ARTICLE_ERROR";

export const deletArticleError = (e) => {
  return {
    type: DELETE_ARTICLE_ERROR,
    e
  }
}