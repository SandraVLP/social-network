import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import withAuthRedirectComponent from "../../utils/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

// let authRedirectComponent = withAuthRedirectComponent(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status

});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}



export default compose(withRouter, connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),withAuthRedirectComponent )(ProfileContainer)

// export default connect(mapStateToProps, { getUserProfile })(
//   withRouter(authRedirectComponent)
// );
