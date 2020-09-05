import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "history.js";
import Routes from "./Routes";
import { ThemeContextProvider } from "utility/Context";
function App() {
  return (
    <ThemeContextProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
