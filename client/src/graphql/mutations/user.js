import { gql } from 'apollo-boost';

export const loginMutation = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      email
      name
    }
  }
`;

export const logoutMutation = gql`
  mutation Logout {
    logout {
      id
      username
    }
  }
`;
