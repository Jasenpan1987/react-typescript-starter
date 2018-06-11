import * as React from "react";
import { connect } from "react-redux";
import { loadEvents } from "./event-redux";
import { setNames } from "./name-redux";
import { IEvent, INameState } from "./model";
import { ApplicationState } from "Store";

export interface OwnProps {

}

interface StateProps {
  events: IEvent[];
  errors?: { [key: string]: string } | undefined;
  pending: boolean;
  names: INameState;
}

interface DispatchProps {
  loadEvents: () => void;
  setNames: (config: {firstName: string; lastName: string}) => void;
}

type IProps = OwnProps & StateProps & DispatchProps;

class EventsComponents extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.setNames({ firstName: "Jasen", lastName: "Pan"});
    this.props.loadEvents();
  }
  render() {
    if (this.props.pending) {
      return (<h3>Loading</h3>);
    }

    if (this.props.errors && Object.keys(this.props.errors).length > 0) {
      return (<h3>Error</h3>);
    }

    return (
      <div>
        {this.props.events.map(event => (<div key={event.name}>{event.name}</div>))}
        <div>
          <h4>FirstName {this.props.names.firstName}</h4>
          <h4>LastName {this.props.names.lastName}</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  pending: state.events.pending,
  errors: state.events.errors,
  events: state.events.events,
  names: state.names
});

export const Events = connect(mapStateToProps, { loadEvents, setNames })(EventsComponents);
