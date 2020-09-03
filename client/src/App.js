import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "history.js";
import Routes from "./Routes";
import { useQuery } from "@apollo/react-hooks";
import { isLoggedInQuery } from "graphql/queries/user";

function App() {
  const { data, loading, error } = useQuery(isLoggedInQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${error.message}`}</p>;

  console.log(data);
  console.log("this is rendered");
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
