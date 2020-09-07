import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class LayoutContextProvider extends Component {
  state = {
    user: null,
  };

  render() {
    return (
      <Provider value={{ user: this.state.user }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { LayoutContextProvider, Consumer as LayoutContextConsumer };
