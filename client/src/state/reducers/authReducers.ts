import { LOGIN_USER, LOGIN_FAILED, LOGIN_START, LOGOUT_USER } from "../constants/authConstants";

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        loading: true,
    };
    case LOGIN_USER:
      return { 
        ...state,
        isAuth: true,
        userInfo: action.payload,
        error: null,
        loading: false, 
      };
    case LOGIN_FAILED:
      return { 
        isAuth: false,
        error: action.payload  
      };
    case LOGOUT_USER:
      return {
        ...state,
        userInfo: []
      }
    default:
      return state;
  }
};