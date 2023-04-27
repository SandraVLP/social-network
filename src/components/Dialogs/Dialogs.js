import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import { handleMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer'

function Dialogs(props) {
  const state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem path={dialog.path} userName={dialog.userName} key={dialog.id} />
  ));


  let messagesElements = state.messages.map((message) => (
    <Message messageText={message.messageText} key={message.id} id={message.id} />
  ));
  let newMessageText = state.newMessageText;

  let handleMessageSubmit =() => {
    props.sendMessage();
  };

  let handleMessageChange = (e) => {
    let  text = e.target.value;
    props.updateNewMessageText(text)
  };

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsContainer}>
        <div className={s.dialog}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>{messagesElements}</div>
        <div>
          <textarea className={s.messageText} placeholder='Enter your message' onChange={handleMessageChange} value={newMessageText}></textarea>
          <button className={s.sendMessageButton} onClick={handleMessageSubmit}>Отправить</button>
        </div>
      </div>
    </section>
  );
}

export default Dialogs;
