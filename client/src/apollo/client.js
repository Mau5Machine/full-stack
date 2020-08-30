import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

const httpUri =
  process.env.NODE_ENV === 'development'
    ? `http://${window.location.hostname}:5000/graphql`
    : `https://${process.env.REACT_APP_API_URL}/graphql`;

let link = createHttpLink({
  uri: httpUri,
  credentials: 'same-origin',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
  fetchOptions: {
    mode: 'no-cors',
  },
});

export default client;
