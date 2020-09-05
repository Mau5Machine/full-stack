import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const isLoggedInQuery = gql`
  {
    isLoggedIn
  }
`;

export const ProtectedRouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const { data, loading, error } = useQuery(isLoggedInQuery);

  if (loading) return <p>Loading...</p>;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        data && data.isLoggedIn ? (
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
