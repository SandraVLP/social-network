import React from "react";
import { connect } from "react-redux";
import {
  handleMessageChangeActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(handleMessageChangeActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;
