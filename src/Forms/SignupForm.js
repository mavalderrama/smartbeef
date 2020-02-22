import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as auth_actions from "../Redux/Actions/auth_actions";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles, withTheme } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import calf from "../static/images/calf.jpg";
import cattle from "../static/images/cattle.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    padding: "10%"
    // maxHeight: 400,
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

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    fullWidth
    {...input}
    {...custom}
  />
);

const renderComboField = ({
  input,
  label,
  meta: { touched, invalid, error },
  children,
  data,
  ...custom
}) => {
  const required = input.value == "" ? true : false;
  return (
    <FormControl
      // style={{ minWidth: 500 }}
      fullWidth
      required={true}
      error={required && touched}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...input}
        children={children}
        onChange={input.onChange}
        label={label}
        error={error}
        data={data}
        {...custom}
      >
        {data.map(element => (
          <MenuItem key={element.id} value={element.id}>
            {element.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

class SignupPage extends Component {
  componentDidMount() {
    console.log("did mount Sign Up");
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={6} key={0}>
          <Field
            name="name"
            component={renderTextField}
            label={"Name"}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} key={1}>
          <Field
            name="lastname"
            component={renderTextField}
            label={"Last Name"}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} key={2}>
          <Field
            name="password"
            component={renderTextField}
            label={"Password"}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} key={3}>
          <Field
            name="company"
            component={renderTextField}
            label={"Company Name"}
          />
        </Grid>
        <Grid item xs={12} sm={6} key={4}>
          <Field
            name="email"
            component={renderTextField}
            label={"e-Mail"}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} key={5}>
          <Field
            name="customer"
            component={renderComboField}
            label={"Customer Type"}
            data={[
              { name: "Producer", id: 1 },
              { name: "Buyer", id: 2 }
            ]}
          />
        </Grid>
      </Grid>
    );
  }
}

export default reduxForm({ form: "adminControl" })(
  withStyles(styles)(SignupPage)
);
