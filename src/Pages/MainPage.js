import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as auth_actions from "../Redux/Actions/auth_actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles, withTheme } from "@material-ui/core";
// import { reduxForm } from "redux-form";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    padding: theme.spacing(4),
    textAlign: "center",
    whiteSpace: "nowrap",
    marginTop: theme.spacing(1),
    width: "95%", // Fix IE 11 issue.
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
});

class MainPage extends Component {
  componentDidMount() {
    console.log("did mount MainPage");
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6} sm={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Sell
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Buy
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Support
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Payments
          </Button>
        </Grid>
      </Grid>
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
  return { actions: bindActionCreators(auth_actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTheme(MainPage)));
