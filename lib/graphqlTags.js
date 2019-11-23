import gql from 'graphql-tag'
import CoverPicker from '../components/Build/CoverPicker'

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
            library {
                secure_url
                id
                createdAt
                index
            }
            cover
            message
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

// LIBRARY --- LIBRARY --- LIBRARY --- LIBRARY ---
// LIBRARY --- LIBRARY --- LIBRARY --- LIBRARY ---
// LIBRARY --- LIBRARY --- LIBRARY --- LIBRARY ---

export const CREATE_LIBRARY_ITEM = gql`
    mutation CREATE_LIBRARY_ITEM($secure_url: String!, $index: Int!) {
        createLibraryItem(secure_url: $secure_url, index: $index) {
            secure_url
            index
        }
    }
`

export const GET_LIBRARY_ITEMS_WHERE_ID = gql`
    query GET_LIBRARY_ITEMS_WHERE_ID($id: ID!) {
        libraryItems(where: { user: { id: $id } }, orderBy: index_ASC) {
            secure_url
            id
            index
        }
    }
`

export const UPDATE_LIBRARY_ITEM = gql`
    mutation UPDATE_LIBRARY_ITEM($id: ID!, $index: Int!) {
        updateLibraryItem(id: $id, index: $index) {
            id
            index
        }
    }
`

export const DELETE_LIBRARY_ITEM = gql`
    mutation DELETE_LIBRARY_ITEM($id: ID!) {
        deleteLibraryItem(id: $id) {
            id
            secure_url
        }
    }
`

// COVER --- COVER --- COVER --- COVER --- COVER --- COVER ---
// COVER --- COVER --- COVER --- COVER --- COVER --- COVER ---
// COVER --- COVER --- COVER --- COVER --- COVER --- COVER ---

export const UPDATE_USER_COVER = gql`
    mutation UPDATE_USER_COVER($id: ID!, $cover: String!) {
        updateUser(id: $id, cover: $cover) {
            cover
        }
    }
`

export const UPDATE_USER_MESSAGE = gql`
    mutation UPDATE_USER_MESSAGE($id: ID!, $message: String!) {
        updateUser(id: $id, message: $message) {
            message
        }
    }
`

// CDW --- CDW --- CDW --- CDW --- CDW --- CDW --- CDW ---
// CDW --- CDW --- CDW --- CDW --- CDW --- CDW --- CDW ---
// CDW --- CDW --- CDW --- CDW --- CDW --- CDW --- CDW ---

export const GET_CDW = gql`
    query GET_CDW($id: ID!) {
        users(where: { id: $id }) {
            name
            message
            cover
            library {
                secure_url
                index
            }
        }
    }
`
