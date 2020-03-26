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