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
    
}

export default UserService