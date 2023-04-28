
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

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

export default UsersApiComponent;
