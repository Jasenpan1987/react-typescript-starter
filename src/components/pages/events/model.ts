export interface IEvent {
  name: string;
  pending: boolean;
}

export interface IState {
  events: IEvent[];
  pending: false;
}
