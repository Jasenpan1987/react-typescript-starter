import {
  createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, compose
} from "redux";
import thunk from "redux-thunk";
import { rootReducer, ApplicationState } from "./root-reducer";
import { IEventState, INameState } from "../components/pages/events/model";

export type AppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => ApplicationState) => void;

const defaultState = {
  events: {
    events: [],
    pending: false,
    errors: undefined
  } as IEventState,
  names: {
    firstName: "",
    lastName: ""
  } as INameState
};

export function configureStore(initState: ApplicationState = defaultState) {
  const devToolsExtension = window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ as () => StoreEnhancer;
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
  )(createStore) as any;

  // const store = createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;
  const store = createStoreWithMiddleware(rootReducer, initState);

  if (module.hot) {
    module.hot.accept("./root-reducer", () => {
      const nextRootReducer = require("./root-reducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
