import React from 'react'
import UserResetPaswword from '../components/user/UserResetPassword'
import PropTypes from 'prop-types'
import Router from 'next/router'

class Index extends React.Component {
    componentDidMount() {
        if (this.props.loggedIn) {
            Router.push('/')
        }
    }
    render() {
        if (this.props.loggedIn) return null
        return <UserResetPaswword />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index
