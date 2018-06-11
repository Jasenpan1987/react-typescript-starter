import { Reducer, combineReducers } from "redux";
import { eventsReducer as events, IEventState, nameReducer as names, INameState } from "../components/pages/events";

export interface ApplicationState {
  events: IEventState;
  names: INameState;
}

export const reducers = {
  events,
  names
};

export const rootReducer: Reducer<ApplicationState> = combineReducers(reducers as any);
