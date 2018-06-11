import { createAction, handleActions } from "redux-actions";
import { INameState } from "./model";

enum ActionTypes {
  SET_FULL_NAME = "SET_FULL_NAME"
}

const initState: INameState = {
  firstName: "",
  lastName: ""
};

type PayloadType = {
  firstName: string;
  lastName: string;
};

export const setNames = createAction(
  ActionTypes.SET_FULL_NAME,
  (payload: PayloadType) => payload
);

export const nameReducer = handleActions({
  [ActionTypes.SET_FULL_NAME]: (state, action) => ({
    ...state,
    firstName: action.payload!.firstName,
    lastName: action.payload!.lastName
  })
}, initState);
