import * as React from "react";
import {hot} from "react-hot-loader";
import { Events } from "./pages/events";

class AppComponent extends React.Component {
  public render() {
    return (
      <div>
        <h3>Hello world</h3>
        <Events />
      </div>
    );
  }
}

export const App = hot(module)(AppComponent);
