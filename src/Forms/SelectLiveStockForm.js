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

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    padding: "10%"
    // maxHeight: 400,
    // maxWidth: 345
  },
  slider: {
    width: 250
  },
  input: {
    width: 42
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
          <MenuItem key={element.id * 10} value={element.id}>
            {element.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

class SelectLiveStockForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cowSelector: 0,
      calfSelector: 0
    };
  }
  componentDidMount() {
    console.log("did mount Sign Up");
  }

  handleSliderChange = (refName, event, newValue) => {
    this.setState({ [refName]: newValue });
  };

  handleInputChange = (refName, event) => {
    this.setState({
      [refName]: event.target.value === "" ? "" : Number(event.target.value)
    });
  };

  render() {
    const { classes } = this.props;
    const { cowSelector, calfSelector } = this.state;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Typography id="input-slider" gutterBottom>
          Number of Cows
        </Typography>
        <Grid item xs={8} sm={12} key={0} className={classes.slider}>
          <Slider
            value={typeof cowSelector === "number" ? cowSelector : 0}
            onChange={this.handleSliderChange.bind(this, "cowSelector")}
            aria-labelledby="input-slider"
            min={0}
            max={200}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            className={classes.input}
            value={cowSelector}
            margin="dense"
            onChange={this.handleInputChange.bind(this, "cowSelector")}
            inputProps={{
              min: 0,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
        <Typography id="input-slider2" gutterBottom>
          Number of Cattles
        </Typography>
        <Grid item xs={8} sm={12} key={1} className={classes.slider}>
          <Slider
            value={typeof calfSelector === "number" ? calfSelector : 0}
            onChange={this.handleSliderChange.bind(this, "calfSelector")}
            aria-labelledby="input-slider2"
            min={0}
            max={200}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            className={classes.input}
            value={calfSelector}
            margin="dense"
            onChange={this.handleInputChange.bind(this, "calfSelector")}
            inputProps={{
              min: 0,
              type: "number",
              "aria-labelledby": "input-slider2"
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default reduxForm({ form: "adminControl" })(
  withStyles(styles)(SelectLiveStockForm)
);
