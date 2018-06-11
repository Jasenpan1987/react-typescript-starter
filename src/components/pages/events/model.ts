export interface IEvent {
  name: string;
}

export interface IEventError {
  [key: string]: string;
}

export interface IEventState {
  events: IEvent[];
  pending: false;
  errors?: IEventError | undefined;
}

export interface INameState {
  firstName: string;
  lastName: string;
}
