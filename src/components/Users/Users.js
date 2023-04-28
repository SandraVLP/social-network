import s from "./users.module.css";
import avatar from "../../images/avatar.png";
import { NavLink } from "react-router-dom";
import { createPages } from "../../utils/pagesCreator";


function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  createPages(pages, pagesCount, props.currentPage);

  return (
    <div>
      <div>
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
        <div key={u.id}>
          <span>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small !== null ? u.photos.small : avatar}
                alt=""
                className={s.userPhoto}
              ></img>
            </NavLink>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
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
