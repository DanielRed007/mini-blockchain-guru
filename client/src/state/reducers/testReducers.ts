import { TEST_TASK } from "../constants/testConstants";

export const testReducer = (state = {}, action: any) => {
  switch (action.type) {
    case TEST_TASK:
      return { works: true, result: action.payload };
    default:
      return state;
  }
};