import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class LayoutContextProvider extends Component {
  state = {
    theme: "dark",
  };

  componentDidMount() {}

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "dark" ? "light" : "dark",
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { LayoutContextProvider, Consumer as LayoutContextConsumer };
