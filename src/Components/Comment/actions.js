export const LOAD_COMMENTS = "LOAD_COMMENTS";

export const loadComments = (post_id) => {
  return {
    type: LOAD_COMMENTS,
    post_id
  }
}

export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";

export const loadCommentsSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    comments
  }
}

export const LOAD_COMMENTS_ERROR = "LOAD_COMMENTS_ERROR";

export const loadCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    error
  }
}


export const ADD_COMMENT = "ADD_COMMENT";

export const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  }
}

export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";

export const addCommentSuccess = () => {
  return {
    type: ADD_COMMENT_SUCCESS
  }
}


export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";

export const addCommentError = (error) => {
  return {
    type: ADD_COMMENT_ERROR,
    error
  }
}