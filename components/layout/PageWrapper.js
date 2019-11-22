import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { USER_LOGGEDIN } from '../../lib/graphqlTags'
import { withRouter } from 'next/router'
// import Spinner from './lib/Spinner'
// comps
import Meta from './Meta'
import Navigation from './nav'
import Footer from './Footer'

import styled from 'styled-components'

const PgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .push-down {
        flex: 1;
    }
`

const Content = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
`

class PageWrapper extends React.Component {
    render() {
        // const loggedIn = false

        // have no pagewrapper for CDW page
        if (this.props.router.pathname === '/cdw') {
            return (
                <>
                    {React.Children.map(this.props.children, child =>
                        React.cloneElement(child, {})
                    )}
                </>
            )
        }

        if (this.props.router.pathname === '/') {
            return (
                <>
                    {React.Children.map(this.props.children, child =>
                        React.cloneElement(child, {})
                    )}
                </>
            )
        }

        return (
            <div>
                <Query query={USER_LOGGEDIN}>
                    {({ data: { userLoggedIn }, error, loading }) => {
                        // stop everything until you get the data back
                        if (loading) return null

                        if (error) return <p>Error: {error.message}</p>

                        //don't use data.user as a bool ☠️
                        var loggedIn = false
                        userLoggedIn ? (loggedIn = true) : (loggedIn = false)
                        // console.log('loggedIn ...from PageWrapper = ', loggedIn)

                        return (
                            <PgWrapper>
                                <Meta />
                                <Navigation
                                    loggedIn={loggedIn}
                                    user={userLoggedIn}
                                />
                                <Content>
                                    <div className="page-wrapper">
                                        {React.Children.map(
                                            this.props.children,
                                            child =>
                                                React.cloneElement(child, {
                                                    loggedIn,
                                                    userLoggedIn,
                                                })
                                        )}
                                    </div>
                                </Content>
                                <div className="push-down"></div>
                                <Footer />
                            </PgWrapper>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    router: PropTypes.object,
}

export default withRouter(PageWrapper)
