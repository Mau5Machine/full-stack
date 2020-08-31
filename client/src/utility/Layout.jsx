import React, { useState, useEffect } from 'react';

const ContextLayout = React.createContext();

const Layout = (props) => {
  const { children } = props;
  return <ContextLayout.Provider>{children}</ContextLayout.Provider>;
};
