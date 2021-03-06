import { connect } from "react-redux";
import { reg } from "./actions";
import { Reg } from "./Reg";

const mapStateToProps = (state) => ({
  pageStatus: state.reg.pageStatus,
  error: state.reg.error
});

const mapDispatchToProps = (dispatch) => ({
  reg: (login, password, nickname, email) => {
    dispatch(reg(login, password, nickname, email));
  }
});

export const RegContainer = connect(mapStateToProps, mapDispatchToProps)(Reg);
