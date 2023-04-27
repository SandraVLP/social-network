import s from "./users.module.css";
import avatar from "../../images/avatar.png";
import { NavLink } from "react-router-dom";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
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
