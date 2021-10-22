// import axios from "axios";

// class UserService {

//   static addUser = (user) => {
//     axios.post('http://localhost:3001/users', user)
//       .then( (response) => {
//         console.log(response.data);

//       })
//       .catch((error) => {
//         console.log(error.data);

//       });
//   }

//   static getUser = async (user) => {
//     let url = "http://localhost:3001/users?email="+user.email+"&password="+user.password;
//     try{
//         const response = await axios.get(url);
//         const data = await response.data;
//         console.log(data);
//         return data;
//       }
//       catch (error) {
//         console.log(error); // catches both errors
//         }
//   }

// }

// export default UserService

import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

const get = id => {
  return http.get(`/users/${id}`);
};

const create = data => {
  return http.post("/users", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const findByEmailPassword= (email,password) => {
  return http.get(`/users?email=${email}&password=${password}`);
};

const UserService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByEmailPassword
};

export default UserService;


