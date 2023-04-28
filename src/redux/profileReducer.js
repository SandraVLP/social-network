import { UsersApi } from "../API/Api";
const addPost = "ADD-POST";
const updateNewPost = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  profile: null,
  posts: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Lalalala" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost: {
      let newPost = {
        id: 5,
        message: state.newPostText,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case updateNewPost: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: addPost,
  };
};

export const handlePostChangeActionCreator = (text) => {
  return {
    type: updateNewPost,
    newText: text,
  };
};

export const setUserProfileFunction = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export const getUserProfile = (userId) => {
  return  (
(dispatch) => {

  UsersApi.getProfile(userId)
      .then((res) => {
        dispatch(setUserProfileFunction(res.data));
      });
  });
}


export default profileReducer;
