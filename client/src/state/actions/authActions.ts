import { LOGIN_USER } from "../constants/authConstants";
import axios from "axios";

export const loginUser = (email:string,password:string) => async (dispatch: any) => {
    try {
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
    
        dispatch({
            type: LOGIN_USER,
            payload: data,
        });
      
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};