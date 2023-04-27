import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileFunction } from "../../redux/profileReducer";
import { useLocation, useNavigate,useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfileFunction(profile));
    },

  };
};


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
