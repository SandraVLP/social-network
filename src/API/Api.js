import axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  // BaseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "7dd11e48-780a-41b1-9d21-f1c9f2ef5559",
  },
});
export const UsersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
      .then((res) => {
        return res.data;
      });
  },
  follow(userId) {
    return instance.post(baseUrl + `follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(baseUrl + `follow/${userId}`);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(baseUrl + `profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(baseUrl + `profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(baseUrl + `profile/status/`, { status: status });
  },
};

export const AuthApi = {
  me() {
    return instance.get(baseUrl + `auth/me`);
  },
  login(email, passward, rememberMe = false) {
    return instance.post(baseUrl + `auth/login`, {
      email,
      passward,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(baseUrl + `auth/login`);
  },
};
