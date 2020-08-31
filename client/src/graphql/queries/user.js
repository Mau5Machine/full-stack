import { gql } from 'apollo-boost';

export const isLoggedInQuery = gql`
  {
    isLoggedIn
  }
`;
