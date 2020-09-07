import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const isLoggedInQuery = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const ProtectedRouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  let loggedIn = true;
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        loggedIn ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

// ProtectedRouteWithLayout.propTypes = {
//   redirectLogin: PropTypes.string.isRequired,
// };

RouteWithLayout.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired,
  path: PropTypes.string,
};
