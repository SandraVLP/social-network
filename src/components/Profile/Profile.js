import React from "react";
import wallpaper from '../../images/wallpaper.jpeg';
import avatar from '../../images/profile-picture.jpeg';

function Profile() {
    return (

        <section className='profile'>
            <img className='profile__wallpaper' src={wallpaper}>
  
            </img>
            <div className='profile__content'>
              <div className='profile__description'>
              <img className='profile__picture' src={avatar}></img>
                <div className='profile__info'>
                <h2 className='profile__name'>Евгения</h2>
                  <p className='profile__text'>Дата рождения: 20.10.2003</p>
                  <p className='profile__text'>Город: Москва</p>
                  <p className='profile__text'>ОбразованиеЖ Нет</p>
                  <p className='profile__text'>ХоббиЖ танцы</p>
                </div>
              </div>
            <div className='profile__posts'>
              <h2 className='profile__posts-title'>My posts</h2>
              <form className='profile__post-form'>
                <button className='profile__form-submit'></button>
              </form>
              <div className='profile__post-blocks'></div>
              </div>  
            </div>
          </section>

    );
  }
  
  export default Profile;