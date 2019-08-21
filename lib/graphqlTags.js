import gql from 'graphql-tag'

// USER --- USER --- USER --- USER --- USER ---
// USER --- USER --- USER --- USER --- USER ---
// USER --- USER --- USER --- USER --- USER ---

export const USER_REGISTER = gql`
    mutation USER_REGISTER(
        $name: String!
        $email: String!
        $password: String!
    ) {
        userRegister(name: $name, email: $email, password: $password) {
            name
            email
            password
        }
    }
`

export const USER_LOGIN = gql`
    mutation USER_LOGIN($email: String!, $password: String!) {
        userLogin(email: $email, password: $password) {
            id
            email
            password
        }
    }
`

export const USER_LOGGEDIN = gql`
    query {
        userLoggedIn {
            id
            email
            name
            permissions
        }
    }
`

export const USER_LOGOUT = gql`
    mutation SIGN_OUT_MUTATION {
        userLogout {
            message
        }
    }
`
