import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { isLoggedInQuery } from 'graphql/queries/user';

export const ProtectedRouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  const { data, error, loading } = useQuery(isLoggedInQuery);
  if (error) return <Redirect to='/login' />;
  if (loading) return <p>Loading...</p>;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        data.isLoggedIn ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to='/' />
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
