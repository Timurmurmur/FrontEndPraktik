export const LOAD_POSTS = "LOAD_POSTS";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS
  }
}

export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";

export const loadPostsSuccess = (posts) => {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts
  }
} 


export const LOAD_POSTS_ERROR = "LOAD_POSTS_ERROR";

export const loadPostsError = (error) => {
  return {
    type: LOAD_POSTS_ERROR,
    error
  }
}

export const LOAD_POSTS_BY_TITLE = "LOAD_POSTS_BY_TITLE";

export const loadPostsByTitle = (title) => {
  return {
    type: LOAD_POSTS_BY_TITLE,
    title
  }
}

export const LOAD_POSTS_BY_TITLE_SUCCESS = "LOAD_POSTS_BY_TITLE_SUCCESS";

export const loadPostsByTitleSuccess = (posts) => {
  return {
    type: LOAD_POSTS_BY_TITLE_SUCCESS,
    posts
  }
}

export const LOAD_POSTS_BY_TITLE_ERROR = "LOAD_POSTS_BY_TITLE_ERROR";

export const loadPostsByTitleError = (e) => {
  return {
    type: LOAD_POSTS_BY_TITLE_ERROR,
    e
  }
}