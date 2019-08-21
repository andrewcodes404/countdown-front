import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import dynamic from 'next/dynamic'

// comp
// import Build from '../components/Build.js'

const BuildComponentWithNoSSR = dynamic(
    () => import('../components/Build.js'),
    { ssr: false }
)

class Index extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            Router.push('/')
        }
    }

    render() {
        if (!this.props.loggedIn) return null
        // return Build
        return <BuildComponentWithNoSSR />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index
