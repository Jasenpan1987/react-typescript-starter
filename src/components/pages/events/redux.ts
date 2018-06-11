import { ThunkAction } from "redux-thunk";
import { createAction, createActions, handleActions, handleAction } from "redux-actions";
import { baseAction, Errors, AppThunkAction } from "Store";
import { IEvent, IEventState } from "./model";

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

// type addUIMessagePayload = {
//   text: string;
//   type: "UIMessageType";
// };
// const addUIMessage = createAction<addUIMessagePayload, string, string>(
//   "ADD_UI_MESSAGE", (text, type) => ({text, type})
// );

const { loadEventsPending, loadEventsSuccess, loadEventsFailed } = createActions({
  [LoadEventsTypes.LOAD_EVENTS_SUCCESS]: events => ({ events }),
  [LoadEventsTypes.LOAD_EVENTS_FAILED]: errors => ({ errors }),
}, LoadEventsTypes.LOAD_EVENTS_PENDING);

const getDummyEvents = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const rand = Math.random();
      if (rand > -1) {
        resolve([
          { title: "foo" },
          { title: "bar" }
        ]);
      } else {
        reject({
          message: "not found"
        });
      }
    }, 1000);
  });
};

export const loadEvents = (): ThunkAction<any, IEventState, null, any> => async (dispatch, getState) => {
  dispatch(loadEventsPending());

  try {
    const data = await getDummyEvents();
    dispatch(loadEventsSuccess(data));
  } catch (error) {
    dispatch(loadEventsFailed(error));
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
