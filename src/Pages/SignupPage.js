import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as signup_actions from "../Redux/Actions/signup_actions";
import { withStyles, withTheme } from "@material-ui/core";
import SignupForm from "../Forms/SignupForm";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // display: "flex",
    // flexWrap: "wrap",
    // maxHeight: 400,
    minHeight: 300
    // maxWidth: 345
  },
  // button: {
  //   padding: theme.spacing(4),
  //   textAlign: "center",
  //   whiteSpace: "nowrap",
  //   marginTop: theme.spacing(1),
  //   width: "95%", // Fix IE 11 issue.
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1)
  // },
  media: {
    height: 0,
    paddingTop: "90%" // 16:9
    // width: "95%" // Fix IE 11 issue.
    // "background-image": "url(../static/images/calf.jpg)"
    // marginLeft: theme.spacing(1)
  }
});

function getSteps() {
  return ["Sign Up", "Select your Livestock", "XXX"];
}

class SignupPage extends Component {
  componentDidMount() {
    console.log("did mount Sign Up Form");
  }

  render() {
    const { classes, activeStep, theme } = this.props;
    let style = responsiveFontSizes(theme);
    console.log("singup");

    return (
      <ThemeProvider theme={style}>
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
            {getSteps().map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <SignupForm />
        <Button
          variant="contained"
          color="primary"
          style={{ float: "right", "margin-right": "10%" }}
        >
          Submit
        </Button>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    activeStep: store.signup_reducer.stepper_actual_state
  };
};
const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(signup_actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTheme(SignupPage)));
