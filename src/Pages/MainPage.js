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
import calf from "../static/images/calf.jpg";
import cattle from "../static/images/cattle.jpg";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // display: "flex",
    // flexWrap: "wrap",
    maxHeight: 400,
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

class MainPage extends Component {
  componentDidMount() {
    console.log("did mount MainPage");
  }
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={6} xl={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Sell"
                // subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={cattle}
                title="Calf selling"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  test...
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
          <Grid item xs={6} xl={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Buy"
                // subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={calf}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  test2...
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
        </Grid>
      </Wrapper>
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
