import React from 'react';
import { gql } from 'apollo-boost';
import client from 'apollo/client';

const isLoggedInQuery = gql`
  {
    isLoggedIn
  }
`;

const checkLoggedIn = async () => {
  let data = await client.query({ query: isLoggedInQuery });
  return data.data.isLoggedIn;
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
