import s from "./users.module.css";
import avatar from "../../images/avatar.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { createPages } from "../../utils/pagesCreator";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  createPages(pages,pagesCount, props.currentPage)

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
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                  props.toggleFollowingInProgress(true, u.id)
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "7dd11e48-780a-41b1-9d21-f1c9f2ef5559",
                        },
                      }
                    )
                    .then((res) => {
                      if (res.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingInProgress(false, u.id)
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                  props.toggleFollowingInProgress(true, u.id)
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "7dd11e48-780a-41b1-9d21-f1c9f2ef5559",
                        },
                      }
                    )
                    .then((res) => {
                      if (res.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingInProgress(false, u.id)
                    });
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
