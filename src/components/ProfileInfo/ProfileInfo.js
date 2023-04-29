import wallpaper from "../../images/wallpaper.jpeg";
import avatar from "../../images/profile-picture.jpeg";
import Preloader from "../Preloader/Preloader";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

function ProfileInfo(props) {
  if (!props.profile) {
    return (
    <Preloader />)
  }

    return (
        <div>
        <img className="profile__wallpaper" src={wallpaper} alt=""></img>
      <div className="profile__content">
        <div className="profile__description">
          <img className="profile__picture" src={props.profile.photos.large} alt="аватар"></img>
          <div className="profile__info">
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <h2 className="profile__name">{props.profile.fullName}</h2>
            <p className="profile__text">Про меня: {props.profile.aboutMe}</p>
            <p className="profile__text">Работа: {props.profile.lookingForAJobDescription}</p>
            <p className="profile__text">Контакты: {props.profile.contacts.facebook}</p>
          </div>
        </div>
      </div>
      </div>
    )

}

export default ProfileInfo;