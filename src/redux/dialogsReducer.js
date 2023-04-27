const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";
const sendMessage = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateNewMessageText:
      return { ...state, newMessageText: action.newText };
    case sendMessage:
      let newMessage = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { messageText: newMessage, id: 3 }],
      };

    default:
      return state;
  }
};

export const handleMessageChangeActionCreator = (text) => {
  return {
    type: updateNewMessageText,
    newText: text,
  };
};

export const sendMessageActionCreator = () => {
  return {
    type: sendMessage,
  };
};

export default dialogsReducer;
