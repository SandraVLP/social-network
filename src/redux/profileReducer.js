import { profileApi } from "../API/Api";
const addPost = "ADD-POST";
const updateNewPost = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  profile: null,
  posts: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Lalalala" },
  ],
  newPostText: "",
  status: ""
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
    case SET_STATUS: {
      return { ...state, status: action.status };
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
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((res) => {
      dispatch(setUserProfileFunction(res.data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((res) => {
      dispatch(setStatus(res.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
