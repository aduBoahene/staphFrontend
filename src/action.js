import axios from "axios";
import jwt from 'jsonwebtoken'

export const AttemptLogin = (user) => async (dispatch) => {

  console.log("user in action",user);
    
     await axios.post("http://localhost:9090/login",user)
      .then(res =>{
        localStorage.setItem('token', res.data.accessToken);
        dispatch(setCurrentUser(jwt.decode(res.data.accessToken)))
        window.location="/"
      }
      ).catch(err=>{
        console.log("login error",err.response)
      }); 
  };

  export const setCurrentUser=(user)=>{
    return {
      type:"SET_CURRENT_USER",
      payload:user
    }
  }

