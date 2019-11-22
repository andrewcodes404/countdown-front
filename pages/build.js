import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
// import dynamic from 'next/dynamic'

// comp
import Build from '../components/Build'

// const BuildComponentWithNoSSR = dynamic(
//     () => import('../components/build/Index.js'),
//     { ssr: false }
// )

class Index extends React.Component {
    componentDidMount() {
        // console.log('yes the build page comp mounted 🏇')
        if (!this.props.loggedIn) {
            Router.push('/')
        }
    }

    render() {
        if (!this.props.loggedIn) return null

        return (
            // <BuildComponentWithNoSSR
            //     loggedIn={this.props.loggedIn}
            //     user={this.props.userLoggedIn}
            // />

            <Build
                loggedIn={this.props.loggedIn}
                user={this.props.userLoggedIn}
            />
        )
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
    userLoggedIn: PropTypes.object,
}

export default Index
