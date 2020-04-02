import { connect } from "react-redux";
import { loadPost, changeArticle, deleteArticle } from "./actions";
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
  },
  changeArticle: (article, id) => {
    dispatch(changeArticle(article,id));
  },
  deleteArticle: (id) => {
    dispatch(deleteArticle(id));
  }
});

export const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);
