
import React from "react";
import Users from "./Users";
import spin from "../../images/spin.svg";
import { UsersApi } from "../../API/Api"

class UsersApiComponent extends React.Component {
  componentDidMount() {
this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.setIsFetching(true);
    UsersApi.getUsers(p, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setIsFetching(false);
      });
  };
  render() {

    return (<>{this.props.isFetching ? <img src={spin} /> : null}
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
