import { configureStore } from "./configure-store";
import { ApplicationState } from "./root-reducer";

export type AppThunkAction =
  (
    dispatch: (action: any) => void,
    getState: () => ApplicationState
  ) => void;

export { configureStore, ApplicationState };

// export type baseAction<T, Payload, Meta> = {
//   type: T;
//   payload?: Payload;
//   meta?: Meta;
// };
