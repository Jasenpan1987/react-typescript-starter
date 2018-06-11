import {
  createStore, applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root-reducer";

export interface ApplicationState {
  events: string[];
}

const defaultState: ApplicationState = {
  events: []
};

export type AppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => ApplicationState) => void;

export function configureStore(initState: ApplicationState = defaultState) {
  const store = createStore(rootReducer, initState,
    composeWithDevTools(applyMiddleware(
      thunk
  )));

  if (module.hot) {
    module.hot.accept("./root-reducer", () => {
      const nextRootReducer = require("./root-reducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
