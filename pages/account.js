import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import Link from 'next/link'

class Index extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            Router.push('/')
        }
    }

    render() {
        if (!this.props.loggedIn) return null
        return (
            <div>
                <p>the account page</p>
                <p>i would like to...</p>
                <Link href="/build">
                    <a> build a CountdownWow Now!</a>
                </Link>
            </div>
        )
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index
