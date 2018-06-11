import { ThunkAction } from "redux-thunk";
import { createAction, createActions, handleActions, handleAction } from "redux-actions";
import { IEvent, IEventState, IEventError } from "./model";

enum LoadEventsTypes {
  LOAD_EVENTS_PENDING = "LOAD_EVENTS_PENDING",
  LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS",
  LOAD_EVENTS_FAILED = "LOAD_EVENTS_FAILED",
}

const initState: IEventState = {
  events: [],
  pending: false,
  errors: undefined
};

const loadEventsPending = createAction(LoadEventsTypes.LOAD_EVENTS_PENDING);

const loadEventsSuccess = createAction(
  LoadEventsTypes.LOAD_EVENTS_SUCCESS,
  (events: IEvent[]) => events
);

const loadEventsFailed = createAction(
  LoadEventsTypes.LOAD_EVENTS_FAILED,
  (errors: any) => errors
);

const getDummyEvents = () => {
  return new Promise<IEvent[]>((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand > 0.5) {
        resolve([
          { name: "foo" },
          { name: "bar2" }
        ]);
      } else {
        reject({
          message: "not found"
        } as IEventError);
      }
    }, 1000);
  });
};

export const loadEvents = (): ThunkAction<any, IEventState, null, any> => async (dispatch, getState) => {
  dispatch(loadEventsPending());

  try {
    const data: IEvent[] = await getDummyEvents();
    dispatch(loadEventsSuccess(data));
  } catch (errors) {
    dispatch(loadEventsFailed(errors));
  }
};

const eventsReducer = handleActions(
  {
    [LoadEventsTypes.LOAD_EVENTS_PENDING] : (state: any) => ({
      ...state,
      pending: true,
      errors: undefined
    }),
    [LoadEventsTypes.LOAD_EVENTS_SUCCESS] : (state: any, action) => ({
      ...state,
      events: action.payload,
      pending: false,
      errors: undefined
    }),
    [LoadEventsTypes.LOAD_EVENTS_FAILED]: (state: any, action) => ({
      ...state,
      pending: false,
      errors: action.payload
    })
  }
, initState);

export { loadEventsPending, loadEventsSuccess, loadEventsFailed, eventsReducer, initState };
