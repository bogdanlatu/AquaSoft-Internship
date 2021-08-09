import Axios from "axios";

const AuthService = {
  registerUser: user => {
    return Axios({
      method: "POST",
      url: "http://localhost:5000/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: user
    }).then((res) => {
      return(res.data);
    });
  },

};

export default AuthService;