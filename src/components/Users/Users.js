import s from "./users.module.css";
import avatar from "../../images/avatar.png";
import { NavLink, Navigate } from "react-router-dom";
import { createPages } from "../../utils/pagesCreator";


function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  createPages(pages, pagesCount, props.currentPage);
  return (
    <div>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <button
              className={props.currentPage ? p : s.selectedPage}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </button>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>

            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small !== null ? u.photos.small : avatar}
                alt=""
                className={s.userPhoto}
              ></img>
            </NavLink>
            <div className={s.info}>
            {u.followed ? (
              <button className={s.button}
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button className={s.button}
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
           
            <div>Имя: {u.name}</div>
            <div>Статус: {u.status}</div>
            </div>
          {/* <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span> */}
        </div>
      ))}
    </div>
  );
}

export default Users;
