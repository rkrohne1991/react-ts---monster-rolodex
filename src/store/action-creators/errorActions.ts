import { ErrorActionType } from "../action-types/errorActionTypes";
import { ErrorType } from "../types/errorType";

export const setError = (error: ErrorType) => ({
  type: ErrorActionType.SET_ERROR,
  payload: error,
});
