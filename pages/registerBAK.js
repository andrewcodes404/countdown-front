import React from 'react'
import UserRegister from '../components/user/UserRegister'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Auth from '../utils/auth'

class Index extends React.Component {
    render() {
        return (
            <Auth>
                {({ data: { userLoggedIn }, loading }) => {
                    console.log(userLoggedIn)
                    if (loading) return null
                    if (userLoggedIn) return null
                    if (!userLoggedIn) return <UserRegister />
                }}
            </Auth>
        )
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index
