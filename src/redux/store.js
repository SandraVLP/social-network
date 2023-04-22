import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Lalalala" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { messageText: "Hello!", id: 1 },
        { messageText: "Как дела?!!", id: 2 },
      ],
      dialogs: [
        { path: "1", userName: "Andrew" },
        { path: "2", userName: "Afina" },
        { path: "3", userName: "Sara" },
      ],
      newMessageText: "",
    },
    navigationPage: []
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("fff");
  },
  dispatch(action) {
this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
this._state.navigationPage = navigationReducer(this._state.navigationPage, action);

this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;


