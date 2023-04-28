import axios  from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  BaseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7dd11e48-780a-41b1-9d21-f1c9f2ef5559",
  },
})
export const UsersApi = {
  getUsers(currentPage, pageSize){
    return axios.get(
      baseUrl +`users?page=${currentPage}&count=${pageSize}`,
      { withCredentials: true }
    )
    .then(res => {return res.data});
  
  }
}


