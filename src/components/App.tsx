import * as React from "react";
import {hot} from "react-hot-loader";

class AppComponent extends React.Component {
  public render() {
    return (
      <div>Hello3 React</div>
    );
  }
}

export const App = hot(module)(AppComponent);
