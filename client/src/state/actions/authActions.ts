import { LOGIN_USER, LOGIN_FAILED, LOGIN_START, LOGOUT_USER } from "../constants/authConstants";
import axios from "axios";

export const loginUser = (email:string,password:string) => async (dispatch: any) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
        };

        dispatch({
            type: LOGIN_START
        });
      
        const { data } = await axios.post(
            "http://localhost:5000/api/auth/login",
            { email, password },
            config
        );
    
        dispatch({
            type: LOGIN_USER,
            payload: data,
        });
      
        localStorage.setItem("userInfo", JSON.stringify(data));  
    } catch (error:any) {
        console.log(error);
        dispatch({
            type: LOGIN_FAILED,
            payload: error.message
        });
    }
};

export const registerUser = () => {};

export const logoutUser = () => async (dispatch: any) => {
    localStorage.removeItem("userInfo");

    dispatch({
        type: LOGOUT_USER
    });
};