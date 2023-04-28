import React from "react";
import { connect } from "react-redux";
import {
  handleMessageChangeActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../utils/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,

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

let authRedirectComponent = withAuthRedirectComponent(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (authRedirectComponent);

export default DialogsContainer;
