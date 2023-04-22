const addPost = "ADD-POST";
const updateNewPost = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Lalalala" },
  ],
  newPostText: "",
} 

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      let newPost = {
        id: 5,
        message: state.newPostText,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case updateNewPost:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
  // if (action.type === addPost) {
  //     let newPost = {
  //         id: 5,
  //         message: state.newPostText,
  //       };
  //       state.posts.push(newPost);
  //       state.newPostText = "";
  // } else if (action.type === updateNewPost) {
  //     state.newPostText = action.newText;

  // }
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

export default profileReducer;
