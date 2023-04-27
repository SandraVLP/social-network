import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <section className="profile">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </section>
  );
}

export default Profile;
