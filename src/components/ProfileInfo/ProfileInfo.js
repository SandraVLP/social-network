import wallpaper from "../../images/wallpaper.jpeg";
import avatar from "../../images/profile-picture.jpeg";
import Preloader from "../Preloader/Preloader";

function ProfileInfo(props) {
  if (!props.profile) {
    return (
    <Preloader />)
  }

    return (
        <div>
        <img className="profile__wallpaper" src={wallpaper}></img>
      <div className="profile__content">
        <div className="profile__description">
          <img className="profile__picture" src={props.profile.photos.large}></img>
          <div className="profile__info">
            <h2 className="profile__name">Евгения</h2>
            <p className="profile__text">Дата рождения: 20.10.2003</p>
            <p className="profile__text">Город: Москва</p>
            <p className="profile__text">Образование: Нет</p>
            <p className="profile__text">Хобби: танцы</p>
          </div>
        </div>
      </div>
      </div>
    )

}

export default ProfileInfo;