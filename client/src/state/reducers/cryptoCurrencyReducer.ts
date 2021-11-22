import { GET_CRYPTO_LIST, GET_CRYPTO_LIST_START, GET_CRYPTO_LIST_FAILED } from "../constants/cryptoCurrencyConstants";

export const cryptoCurrencyReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_CRYPTO_LIST:
      return { list: action.payload, loading: false };
    case GET_CRYPTO_LIST_START:
        return { loading: true };
    case GET_CRYPTO_LIST_FAILED:
        return { loading: true };
    default:
      return state;
  }
};