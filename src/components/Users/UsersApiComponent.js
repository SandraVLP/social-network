import axios from "axios";
import React from "react";
import Users from "./Users";
import spin from "../../images/spin.svg"

class UsersApiComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
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
       />
       </>)
      
    
  }
}

export default UsersApiComponent;
