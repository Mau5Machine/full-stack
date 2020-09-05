import client from "apollo/client";
import {
  loginMutation,
  logoutMutation,
  createAccountMutation,
} from "graphql/mutations/user";

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

export const logout = async (history) => {
  try {
    await client.mutate({
      mutation: logoutMutation,
    });
    client.writeData({ data: { isLoggedIn: false } });
    // history.push("/");
  } catch (err) {
    alert(err.graphQLErrors[0].message);
    return err;
  }
};
