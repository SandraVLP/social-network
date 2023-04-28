import React from "react";
import { connect } from "react-redux";
import {
  handleMessageChangeActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import withAuthRedirectComponent from "../../utils/withAuthRedirect";
import { compose } from 'redux';

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

export default compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirectComponent)(Dialogs);
