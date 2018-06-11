import { Reducer, combineReducers, ReducersMapObject } from "redux";
import { eventsReducer as events, IEventState, nameReducer as names, INameState } from "../components/pages/events";

export interface ApplicationState {
  events: IEventState;
  names: INameState;
}

export const reducers = {
  events,
  names
};

export function buildRootReducer(allReducers: any) {
  return combineReducers<ApplicationState>(
    Object.assign({}, allReducers
      // , { routing: routerReducer, form: formReducer }
    )
  );
}
