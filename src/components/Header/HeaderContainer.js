import React from "react";
import Header from "./Header";

import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/authReducer"
import { AuthApi } from "../../API/Api";

class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.getAuthUserData();
      }

    render() {return (<Header {...this.props} />)  }

}

const mapsStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapsStateToProps, {getAuthUserData}) (HeaderContainer);