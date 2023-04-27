import axios from "axios";
import s from "./users.module.css";
import avatar from "../../images/avatar.png";

function UsersOld(props) {

    const getUsers = () => {
  if (props.users.length === 0) {
      

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {

        props.setUsers(res.data.items)
    }) }
    // props.setUsers([
    //   {
    //     id: 1,
    //     avatarUrl:
    //       "https://icdn.lenta.ru/images/2022/10/31/11/20221031114742010/square_1024_webp_8f466724f273b97b62416bb38f7c4ab3.webp",
    //     followed: true,
    //     fullName: "Alex",
    //     status: "lsfdjfj",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    //   {
    //     id: 2,
    //     avatarUrl:
    //       "https://icdn.lenta.ru/images/2022/10/31/11/20221031114742010/square_1024_webp_8f466724f273b97b62416bb38f7c4ab3.webp",
    //     followed: true,
    //     fullName: "Andrew",
    //     status: "lsfdjfj",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    //   {
    //     id: 3,
    //     avatarUrl:
    //       "https://icdn.lenta.ru/images/2022/10/31/11/20221031114742010/square_1024_webp_8f466724f273b97b62416bb38f7c4ab3.webp",
    //     followed: false,
    //     fullName: "Sara",
    //     status: "lsfdjfj",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    //   {
    //     id: 4,
    //     avatarUrl:
    //       "https://icdn.lenta.ru/images/2022/10/31/11/20221031114742010/square_1024_webp_8f466724f273b97b62416bb38f7c4ab3.webp",
    //     followed: false,
    //     fullName: "Eduard",
    //     status: "lsfdjfj",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    // ]);
  }

  return (
    <div>
        <button onClick={getUsers}>get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <img src={u.photos.small !== null ? u.photos.small : avatar } alt="" className={s.userPhoto}></img>
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

export default UsersOld;
