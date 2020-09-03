import React from "react";
import { Button } from "reactstrap";
import { logoutMutation } from "graphql/mutations/user";
import { useMutation } from "@apollo/react-hooks";
import { isLoggedInQuery } from "graphql/queries/user";
import PropTypes from "prop-types";

const Dashboard = (props) => {
  const [logout] = useMutation(logoutMutation, {
    refetchQueries: [{ query: isLoggedInQuery }],
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <h1>Logged In To Account</h1>
      <Button onClick={logout}>Log out</Button>
    </div>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Dashboard;
