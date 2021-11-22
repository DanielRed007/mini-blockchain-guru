import { GET_CRYPTO_LIST, GET_CRYPTO_LIST_FAILED, GET_CRYPTO_LIST_START  } from "../constants/cryptoCurrencyConstants";
import axios from "axios";

export const getCryptoCurrencyList = (type:string) => async (dispatch: any) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
        };

        dispatch({
            type: GET_CRYPTO_LIST_START
        });
      
        const { data } = await axios.get(
            "http://localhost:5000/api/currency/all",
            config
        );
    
        dispatch({
            type: GET_CRYPTO_LIST,
            payload: data,
        });
      
    } catch (error:any) {
        console.log(error);
        dispatch({
            type: GET_CRYPTO_LIST_FAILED,
            payload: error.message
        });
    }
};