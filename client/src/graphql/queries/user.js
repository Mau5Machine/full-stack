import { gql } from "apollo-boost";

export const isLoggedInQuery = gql`
  {
    isLoggedIn
  }
`;

export const isLoggedInClientQuery = gql`
  {
    isLoggedIn @client
  }
`;
