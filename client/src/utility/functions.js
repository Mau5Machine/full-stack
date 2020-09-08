import client from "apollo/client";
import {
  loginMutation,
  logoutMutation,
  createAccountMutation,
} from "graphql/mutations/user";
import { isLoggedInQuery } from "graphql/queries/user";

export const isLoggedIn = async () => {
  try {
    return await client.query({ query: isLoggedInQuery });
  } catch (err) {
    return err;
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
    history.push("/dashboard");
    client.writeData({ data: { isLoggedIn: true } });
  } catch (err) {
    alert(err.graphQLErrors[0].message);
    return err;
  }
};

export const logout = async (history) => {
  try {
    await client.mutate({
      mutation: logoutMutation,
    });
    history.push("/");
    client.writeData({ data: { isLoggedIn: false } });
  } catch (err) {
    alert(err.graphQLErrors[0].message);
    return err;
  }
};
