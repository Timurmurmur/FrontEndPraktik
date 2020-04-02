import { connect } from "react-redux";
import { Comment } from './Comment';
import { loadComments, addComment } from "./actions";

const mapStateToProps = (state) => ({
  pageStatus: state.comment.pageStatus,
  error: state.comment.error,
  comments: state.comment.comments
});

const mapDispatchToProps = (dispatch) => ({
  loadComments: (post_id) => {
    dispatch(loadComments(post_id))
  },
  addComment: (postId, comment) => {
    dispatch(addComment(postId, comment))
  }
});

export const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);
