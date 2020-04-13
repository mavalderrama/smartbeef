import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as auth_actions from "../Redux/Actions/auth_actions";
import Wrapper from "./Wrapper";
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
import Grid from "@material-ui/core/Grid";
import { withStyles, withTheme } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import calf from "../static/images/calf.jpg";
import cattle from "../static/images/cattle.jpg";
import XLSX from "xlsx";

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
  },
  buttonWrapper: {
    position: "relative"
    // marginTop: theme.spacing(3),
    // height: 380
  },
  speedDial: {
    position: "fixed",
    // float: "right",
    // bottom: "1%"
    // width: "60px",
    // height: "60px",
    bottom: "80px",
    right: "20px"
    // paddingRight: theme.spacing(2)
    // position: "absolute",
    // "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    //   top: theme.spacing(2),
    //   left: theme.spacing(2)
    // }
  }
});

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSpeedDial: false,
      data: [] /* Array of Arrays e.g. [["a","b"],[1,2]] */
    };
    // this.handleFile = this.handleFile.bind(this);
  }
  componentDidMount() {
    console.log("did mount MainPage");
  }

  handleOpen = () => {
    if (this.state.openSpeedDial) this.setState({ openSpeedDial: false });
    else this.setState({ openSpeedDial: true });
  };

  uploadSheet = () => {
    document.getElementById("xlsxUpload").click();
  };

  handleUploadFile = async event => {
    const file = event.target.files[0];
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      /* Update state */
      let columns;
      let rows = [];
      for (let index in data) {
        if (index < 1) columns = data[0];
        else {
          let value = {};
          for (let row_value in data[index]) {
            value[columns[row_value]] = data[index][row_value];
          }
          value["index"] = index;
          rows.push(value);
        }
      }

      this.setState({ data: rows });
    };
    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  };

  render() {
    const { classes, theme } = this.props;
    const { openSpeedDial, data } = this.state;
    let style = responsiveFontSizes(theme);
    const actions = [{ icon: <CloudUploadIcon />, name: "Upload" }];

    return (
      <ThemeProvider theme={style}>
        <Wrapper>
          <Grid container className={classes.root} spacing={2}>
            {data.map(cow => (
              <Grid item xs={6} xl={3} key={cow.index}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={cattle}
                    title="Calf selling"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {cow.variety}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.buttonWrapper}>
            <SpeedDial
              ariaLabel="SpeedDial"
              className={classes.speedDial}
              icon={<SpeedDialIcon />}
              onClose={this.handleOpen}
              onOpen={this.handleOpen}
              open={openSpeedDial}
              direction={"up"}
            >
              {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipOpen
                  tooltipTitle={action.name}
                  onClick={this.uploadSheet}
                />
              ))}
            </SpeedDial>
          </div>
        </Wrapper>
        <input
          style={{ display: "none" }}
          accept=".xlsx"
          id="xlsxUpload"
          type="file"
          ref="xlsxUpload"
          onChange={this.handleUploadFile}
        />
      </ThemeProvider>
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

/* generate an array of column objects */
const make_cols = refstr => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};
