import axios from "axios";

class UserService {

  static addUser = (user) => {
    axios.post('http://localhost:3001/users', user)
      .then( (response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error.data);

      });
  }

  static getUser = async (user) => {
    let url = "http://localhost:3001/users?email="+user.email+"&password="+user.password;
    try{
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data);
        return data;
      }
      catch (error) {
        console.log(error); // catches both errors
        }
  }

}

export default UserService