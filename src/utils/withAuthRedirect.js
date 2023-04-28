import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapsStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})

function withAuthRedirectComponent(Component) {

class RedirectComponent extends React.Component {
    render(){
    if (!this.props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...this.props} />}
}


let connectedAuthRedirectComponent = connect(mapsStateToProps) (RedirectComponent);

return connectedAuthRedirectComponent;
  };


export default withAuthRedirectComponent;