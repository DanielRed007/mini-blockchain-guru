import { TEST_TASK } from "../constants/testConstants";

export const test = () => async (dispatch: any) => {
  try {
    dispatch({
      type: TEST_TASK,
    });
  } catch (error) {}
};