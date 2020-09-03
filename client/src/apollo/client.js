import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { isLoggedInQuery } from "graphql/queries/user";

const httpUri =
  process.env.NODE_ENV === "development"
    ? `http://${window.location.hostname}:5000/graphql`
    : `https://${process.env.REACT_APP_API_URL}/graphql`;

let link = createHttpLink({
  uri: httpUri,
  credentials: "include",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
  fetchOptions: {
    mode: "no-cors",
  },
});

const checkLoggedIn = async () => {
  try {
    let data = await client.query({ query: isLoggedInQuery });
    cache.writeData({
      data: {
        isAuth: data.isLoggedIn,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

checkLoggedIn();
export default client;
