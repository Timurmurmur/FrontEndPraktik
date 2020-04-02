export const LOAD_USER_POSTS = "LOAD_USER_POSTS";

export const loadUserPosts = () => {
  return {
    type: LOAD_USER_POSTS
  }
}

export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";

export const loadUserPostsSuccess = (posts) => {
  return{
    type: LOAD_USER_POSTS_SUCCESS,
    posts
  }
}

export const LOAD_USER_POSTS_ERROR = "LOAD_USER_POSTS_ERROR";

export const loadUserPostsError = (error) => {
  return {
    type: LOAD_USER_POSTS_ERROR,
    error
  }
}
