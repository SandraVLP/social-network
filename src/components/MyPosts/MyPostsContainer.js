import React from "react";
import {
  addPostActionCreator,
  handlePostChangeActionCreator,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const handlePostChange = (text) => {
    let action = handlePostChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={handlePostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;
