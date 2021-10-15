import { LOGIN_USER, AUTH_USER } from "../constants/authConstants";

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return { userInfo: action.payload };
    case AUTH_USER:
      return { isAuth: false };
    default:
      return state;
  }
};