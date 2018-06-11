import * as React from "react";
import { connect } from "react-redux";
import { loadEvents } from "./redux";
import { IEvent } from "./model";
import { ApplicationState } from "Store";

export interface OwnProps {
  title: string;
}

interface StateProps {
  events: IEvent[];
  errors?: { [key: string]: string } | undefined;
  pending: boolean;
}

interface DispatchProps {
  loadEvents: () => void;
}

type IProps = OwnProps & StateProps & DispatchProps;

class EventsComponents extends React.Component<IProps, {}> {
  render() {
    if (this.props.pending) {
      return (<h3>Loading</h3>);
    }

    if (this.props.errors && Object.keys(this.props.errors).length > 0) {
      return (<h3>Error</h3>);
    }

    return (
      this.props.events.map(event => (<div key={event.name}>{event.name}</div>))
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  pending: state.events.pending,
  errors: state.events.errors,
  events: state.events.events
});

export const Events = connect(mapStateToProps, { loadEvents })(EventsComponents);
