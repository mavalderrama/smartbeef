import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as auth_actions from "../Redux/Actions/auth_actions";
import { connect } from "react-redux";
import { withStyles, withTheme } from "@material-ui/core";

class MainPage extends Component {
  componentDidMount() {
    console.log("did mount MainPage");
  }
  render() {
    return <h1>Welcome 2 COMACOW</h1>;
  }
}

// const mapStateToProps = (store, ownProps) => {
//     return {
//         is_authenticated: store.auth_reducer.is_authenticated,
//         is_loading: store.auth_reducer.is_loading,
//         user: store.auth_reducer.user
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return { actions: bindActionCreators(auth_actions, dispatch) };
// };

export default connect()(withTheme(MainPage));
