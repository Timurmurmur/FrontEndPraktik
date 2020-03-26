import { connect } from "react-redux";
import { loadPost } from "./actions";
import { Article } from './Article';

const mapStateToProps = (state) => ({
  pageStatus: state.article.pageStatus,
  error: state.article.error,
  post: state.article.post,
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  loadPost: (id) => {
    dispatch(loadPost(id));
  }
});

export const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);
