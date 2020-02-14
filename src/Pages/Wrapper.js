import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcon from "@material-ui/icons/Add";
import { bindActionCreators } from "redux";
import * as auth_actions from "../Redux/Actions/auth_actions";
import { connect } from "react-redux";
import { withStyles, withTheme } from "@material-ui/core";

const styles = theme => ({
  root: {
    flex: 1,
    justifyContent: "flex-end",
    // marginBottom: 36,
    paddingTop: "98%"
  }
});

class Wrapper extends Component {
  componentDidMount() {
    console.log("Page Wrapper Mounted");
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.children}
        <BottomNavigation
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Post" icon={<AddIcon />} />
        </BottomNavigation>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (store, ownProps) => {
  return {
    // is_authenticated: store.auth_reducer.is_authenticated,
    // is_loading: store.auth_reducer.is_loading,
    // user: store.auth_reducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // actions: bindActionCreators(auth_actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTheme(Wrapper)));
