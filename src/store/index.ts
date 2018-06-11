import { configureStore, ApplicationState } from "./configure-store";

export type AppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => ApplicationState) => void;

export { configureStore, ApplicationState };

export type Errors = {
  code?: string;
  message: string;
};

export type baseAction<T, Payload, Meta> = {
  type: T;
  payload?: Payload;
  meta?: Meta;
};

// export const createAction =
//   (config: {type: string; payload: any; meta: any; schema: any; errors: any }) => {
//     if ()
//   }
