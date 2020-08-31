import React from 'react';
import PropTypes from 'prop-types';

const Minimal = (props) => {
  const { children } = props;

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
};

export default Minimal;
