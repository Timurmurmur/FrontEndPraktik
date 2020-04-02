import { connect } from "react-redux";
import { loadUserPosts } from "./actions";
import { Profile } from "./Profile";

const mapStateToProps = (state) => ({
  pageStatus: state.profile.pageStatus,
  error: state.profile.error,
  posts: state.profile.posts,
  user: state.profile.user
});

const mapDispatchToProps = (dispatch) => ({
  loadUserPosts: () => {
    dispatch(loadUserPosts());
  }
});

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
