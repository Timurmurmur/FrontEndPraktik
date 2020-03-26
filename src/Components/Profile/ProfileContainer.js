import { connect } from "react-redux";
import { loadUserPosts } from "./actions";
import { Profile } from "./Profile";

const mapStateToProps = (state) => ({
  pageStatus: state.profile.pageStatus,
  error: state.profile.error,
  posts: state.profile.posts
});

const mapDispatchToProps = (dispatch) => ({
  loadUserPosts: () => {
    dispatch(loadUserPosts());
  }
});

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
