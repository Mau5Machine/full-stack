import React, { useState } from "react";
const { Provider, Consumer } = React.createContext();

const ThemeContextProvider = (props) => {
  const [state, setState] = useState({
    theme: "dark",
  });

  const toggleTheme = () => {
    setState((prevState) => {
      return {
        theme: prevState.theme === "dark" ? "light" : "dark",
      };
    });
  };

  return (
    <Provider
      value={{
        theme: state.theme,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
