import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";


function Profile(props) {

  return (
    <section className="profile">
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </section>
  );
}

export default Profile;
