import React from "react";
import { Button } from "reactstrap";
import { logout } from "utility/functions";
import PropTypes from "prop-types";
import { ThemeContextConsumer } from "utility/Context";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const logoutResolver = gql`
  mutation logout {
    logout @client
  }
`;

const loginResolver = gql`
  mutation logout {
    login @client
  }
`;

const Dashboard = (props) => {
  const { history } = props;
  const [localLogout] = useMutation(logoutResolver);
  const [localLogin] = useMutation(loginResolver);

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div>
          <h1
            className={`${context.theme}-title`}
          >{`Currently selected theme ${context.theme}`}</h1>
          <h2
            className={`${context.theme}-title`}
          >{`Currently logged in ${context.isLoggedIn}`}</h2>
          <Button onClick={context.toggleTheme}>Toggle Theme</Button>
          <Button onClick={() => logout(history)}>Log out</Button>
          <Button onClick={localLogout}>Local Log out</Button>
          <Button onClick={localLogin}>Local Log in</Button>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Dashboard;
