import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as auth_actions from "./../Redux/Actions/auth_actions";
import LoginForm from "../Forms/LoginForm";
import Loading from "../Components/Loading";
import { withStyles, withTheme } from "@material-ui/core";

const styles = theme => ({});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remember: false,
      user: "guest",
      id: 0
    };
  }

  componentDidMount() {
    console.log("did mount login");
  }

  login = values => {
    const { history, auth_actions } = this.props;
    auth_actions.login();
    history.push("/");
  };
  render() {
    const { is_authenticated, history, is_loading, user } = this.props;
    console.log("state", this.state);
    if (is_authenticated) {
      if (this.state.remember) {
        localStorage.setItem("user", user);
        sessionStorage.setItem("user", user);
      } else {
        sessionStorage.setItem("user", user);
      }
      console.log("did push");
      history.push("/");
    }
    return (
      <div>
        <LoginForm onSubmit={this.login} />
        <Loading open={is_loading} />
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    is_authenticated: store.auth_reducer.is_authenticated,
    is_loading: store.auth_reducer.is_loading,
    user: store.auth_reducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return { auth_actions: bindActionCreators(auth_actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTheme(LoginPage)));
