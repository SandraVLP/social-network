import React from "react";
import {
  handleMessageChangeActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
  const state = props.store.getState().dialogsPage;

  let handleMessageSubmit = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let handleMessageChange = (text) => {
    let action = handleMessageChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewMessageText={handleMessageChange}
      sendMessage={handleMessageSubmit}
      dialogsPage={state}
    />
  );
}

export default DialogsContainer;
