import { LOGIN_USER } from "../constants/authConstants";

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return { result: action.payload };
    default:
      return state;
  }
};