const gql = require('graphql-tag');

const queryLogin = gql`
  mutation login($username:String!, $password:String!) {
    login(input: {
      identifier: $username,
      password: $password
    }) {
      jwt,
      user {
        id
      }
    }
  }
`;

const queryGetUserData = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
    }
  }
`

module.exports = {
  queryLogin,
  queryGetUserData
}
