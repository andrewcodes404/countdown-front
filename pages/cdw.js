import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

// comp
import CDW from '../components/CDW'

class Index extends React.Component {
    render() {
        return <CDW />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
    userLoggedIn: PropTypes.object,
}

export default Index
