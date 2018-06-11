import { Reducer, combineReducers } from "redux";

export interface ApplicationState {
  events: string[];
}

export const reducers = {
  events: (state: any) => state
};

// export const createRootReducer = (rootReducer: {[key: string]: Reducer}) => {
//   return combineReducers(rootReducer);
// };

export const rootReducer: Reducer<ApplicationState> = combineReducers(reducers);
