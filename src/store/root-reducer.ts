import { Reducer, combineReducers } from "redux";
import { eventsReducer as events, IEventState } from "../components/pages/events";

export interface ApplicationState {
  events: IEventState;
}

export const reducers = {
  events
};

// export const createRootReducer = (rootReducer: {[key: string]: Reducer}) => {
//   return combineReducers(rootReducer);
// };

export const rootReducer: Reducer<ApplicationState> = combineReducers(reducers);
