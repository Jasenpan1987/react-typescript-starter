export interface IEvent {
  name: string;
}

export interface IEventState {
  events: IEvent[];
  pending: false;
  errors?: { [key: string]: string } | undefined;
}
