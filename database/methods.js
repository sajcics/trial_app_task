const client = require('./client');
const { queryLogin, queryGetUserData } = require('./queries');

const sendLoginData = ({username, password}) => {
  return client.getInstance().mutate({
    mutation: queryLogin,
    variables: {
      username,
      password
    }
  })
}

const getUserData = ({jwt, id}) => {
  return client.getAuthClient(jwt).query({
    query: queryGetUserData,
    variables: {
      id
    }
  })
}

module.exports = {
  sendLoginData,
  getUserData
}