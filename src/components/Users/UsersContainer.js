
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,

  getUsers,
} from "../../redux/usersReducer";
import withAuthRedirectComponent from "../../utils/withAuthRedirect";
import { compose } from "redux";

class UsersApiComponent extends React.Component {
  componentDidMount() {
this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize);
  };
  render() {
  

    return (<>{this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      toggleFollowingInProgress={this.props.toggleFollowingInProgress}
      followingInProgress={this.props.followingInProgress}
       />
       </>)
      
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,

  getUsers,
}), withAuthRedirectComponent)(UsersApiComponent);

