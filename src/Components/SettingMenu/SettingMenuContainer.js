import { connect } from "react-redux";
import { loadUserPosts, loadUser } from "./actions";
import SettingMenu from "./SettingMenu";

const mapStateToProps = (state) => ({
  pageStatus: state.user.pageStatus,
  error: state.user.error,
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => {
    dispatch(loadUser())
  }
});

export const SettingMenuContainer = connect(mapStateToProps, mapDispatchToProps)(SettingMenu);
