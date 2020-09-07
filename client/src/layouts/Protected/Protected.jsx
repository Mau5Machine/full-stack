import React from "react";
import PropTypes from "prop-types";
import { ThemeContextConsumer } from "utility/Context";

const Minimal = (props) => {
  const { children } = props;

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`${context.theme}-body main`}>
          <h1>Protected</h1>
          <main>{children}</main>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
};

export default Minimal;
