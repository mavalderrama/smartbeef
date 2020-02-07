import React, { Component } from "react";
import { connect } from "react-redux";
import * as auth_actions from "./../../Redux/Actions/auth_actions";
import { bindActionCreators } from "redux";
import LoginPage from "../../Pages/LoginPage";
import MainPage from "../../Pages/MainPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    console.log("App did mount");
  }

  render() {
    let SecureRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.is_authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <SecureRoute exact path="/" component={MainPage} />
          {/*<SecureRoute exact path="/" component={LoginPage} />*/}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    is_authenticated: store.auth_reducer.is_authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(auth_actions, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
