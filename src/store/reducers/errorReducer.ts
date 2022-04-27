import { ErrorActionType } from "../action-types/errorActionTypes";

export type ErrorState = {
  readonly isError: boolean;
  readonly errorMessage: string;
};

const initialState: ErrorState = {
  isError: false,
  errorMessage: "",
};

const reducer = (state: ErrorState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ErrorActionType.SET_ERROR:
      return {...state};
    default:
      return state;
  }
}

export default reducer;