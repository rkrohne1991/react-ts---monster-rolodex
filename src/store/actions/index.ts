import { ErrorActionType } from "../action-types/errorActionTypes";

export interface SetErrorUserAction {
  type: ErrorActionType.SET_ERROR;
  payload: any;
}
export type Action =
  | SetErrorUserAction;