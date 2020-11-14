const ApolloClient = require('@apollo/client').ApolloClient; 
const InMemoryCache = require('@apollo/client').InMemoryCache;
const createHttpLink = require('@apollo/client').createHttpLink;
const setContext = require('@apollo/client/link/context').setContext

class Client {
  constructor() {
    this.instance = new ApolloClient({
      link: createHttpLink({
        uri: process.env.DATABASE_URL
      }),
      cache: new InMemoryCache()
    });
  }

  getInstance() {
    return this.instance;
  }

  getAuthClient(token) {
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }));

    const httpLink = createHttpLink({
      uri: process.env.DATABASE_URL
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });

    return client;
  }
}

module.exports = new Client();