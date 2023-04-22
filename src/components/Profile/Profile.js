import React from "react";
import wallpaper from "../../images/wallpaper.jpeg";
import avatar from "../../images/profile-picture.jpeg";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

function Profile(props) {
  return (
    <section className="profile">
      <img className="profile__wallpaper" src={wallpaper}></img>
      <div className="profile__content">
        <div className="profile__description">
          <img className="profile__picture" src={avatar}></img>
          <div className="profile__info">
            <h2 className="profile__name">Евгения</h2>
            <p className="profile__text">Дата рождения: 20.10.2003</p>
            <p className="profile__text">Город: Москва</p>
            <p className="profile__text">Образование: Нет</p>
            <p className="profile__text">Хобби: танцы</p>
          </div>
        </div>
      </div>
      <MyPostsContainer store={props.store} />
    </section>
  );
}

export default Profile;
