import client, { cache } from "apollo/client";
import {
  loginMutation,
  logoutMutation,
  createAccountMutation,
} from "graphql/mutations/user";
import { isLoggedInQuery } from "graphql/queries/user";
import { gql } from "apollo-boost";

const loggedInClient = gql`
  {
    isLoggedIn @client
  }
`;
export const isLoggedIn = async () => {
  try {
    let data = await cache.readQuery({ query: loggedInClient });
    console.log(data);
  } catch (err) {
    alert(err.graphQLErrors[0].message);
  }
};

export const login = async (username, password, history) => {
  try {
    await client.mutate({
      mutation: loginMutation,
      variables: {
        username,
        password,
      },
    });
    client.writeData({ data: { isLoggedIn: true } });
    history.push("/dashboard");
  } catch (err) {
    alert(err.graphQLErrors[0].message);
    return err;
  }
};

export const createAccount = async (input, history) => {
  try {
    await client.mutate({
      mutation: createAccountMutation,
      variables: {
        ...input,
      },
    });
    client.writeData({ data: { isLoggedIn: true } });
    history.push("/dashboard");
  } catch (err) {
    alert(err.graphQLErrors[0].message);
    return err;
  }
};

export const logout = async () => {
  try {
    await client.mutate({
      mutation: logoutMutation,
    });
    client.writeData({ data: { isLoggedIn: false } });
  } catch (err) {
    alert(err.graphQLErrors[0].message);
    return err;
  }
};
