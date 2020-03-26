import { connect } from "react-redux";
import { addArticle } from "./actions";
import { NewArticle } from "./NewArticle";

const mapStateToProps = (state) => ({
  pageStatus: state.newArticle.pageStatus,
  error: state.newArticle.error,
});

const mapDispatchToProps = (dispatch) => ({
  addArticle: (article) => {
    dispatch(addArticle(article));
  }
});

export const NewArticleContainer = connect(mapStateToProps, mapDispatchToProps)(NewArticle);
