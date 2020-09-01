import { gql } from "apollo-boost";

export const createAccountMutation = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(
      input: {
        username: $username
        email: $email
        name: $name
        password: $password
      }
    ) {
      id
      username
      email
      name
    }
  }
`;
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
