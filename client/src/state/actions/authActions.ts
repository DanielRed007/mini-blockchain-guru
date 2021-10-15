import { LOGIN_USER, AUTH_USER } from "../constants/authConstants";
import axios from "axios";

export const loginUser = (email:string,password:string) => async (dispatch: any) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
    };
  
    const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        config
    );

    console.log(data);

    // dispatch({
    //     type: LOGIN_USER,
    //     payload: data,
    // });
  
    // localStorage.setItem("userInfo", JSON.stringify(data));

    // dispatch({
    //     type: AUTH_USER,
    //     payload: true,
    // });
};