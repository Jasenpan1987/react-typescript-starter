import { createAction, handleActions } from "redux-actions";
import { baseAction, Errors } from "Store";
import { IEvent, IState } from "./model";

enum LoadEventsTypes {
  LOAD_EVENTS_PENDING = "LOAD_EVENTS_PENDING",
  LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS",
  LOAD_EVENTS_FAILED = "LOAD_EVENTS_FAILED",
}

export const loadEventsPending = createAction(LoadEventsTypes.LOAD_EVENTS_PENDING);

export const loadEventsSuccess = createAction<LoadEventsTypes, IEvent[]>(
  LoadEventsTypes.LOAD_EVENTS_SUCCESS,
  (events: any) => events
);

export const loadEventsFailed = createAction(
  LoadEventsTypes.LOAD_EVENTS_FAILED,
  (errors: Error) => errors
);

const eventsReducer = handleActions()
