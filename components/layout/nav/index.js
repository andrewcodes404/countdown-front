import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { USER_LOGOUT, USER_LOGGEDIN } from '../../../lib/graphqlTags'
import Link from 'next/link'
import Router from 'next/router'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import ScrollIntoView from 'react-scroll-into-view'

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    max-width: 1100px;
    @media (min-width: 576px) {
        padding: 20px 0;
        flex-direction: row;
    }

    h1 {
        margin: 0 0 10px 0;
    }

    .nav--logo {
    }

    .nav--menu {
        display: flex;
        align-items: center;
        /* width: 240px; */
        /* justify-content: space-between; */
        p,
        a {
            cursor: pointer;
            margin: 0 0 0 20px;

            &:hover {
                color: ${props => props.theme.green};
                cursor: pointer;
            }
        }
    }
`

class Index extends React.Component {
    render() {
        const {
            router: { asPath },
            loggedIn,
            user,
        } = this.props

        // console.log('asPath = ', asPath)
        // console.log('this.props from nav = ', this.props)

        return (
            <Nav>
                <div className="nav--logo">
                    <Link href="/">
                        <a>
                            <h1>CountDownWow</h1>
                        </a>
                    </Link>
                </div>

                <div className="nav--menu">
                    {!loggedIn && (
                        <ScrollIntoView selector="#login">
                            <p>Register/Login</p>
                        </ScrollIntoView>
                    )}

                    {loggedIn && (
                        <Link href="/build">
                            <a>build</a>
                        </Link>
                    )}

                    {loggedIn && (
                        <Mutation
                            mutation={USER_LOGOUT}
                            refetchQueries={[{ query: USER_LOGGEDIN }]}
                        >
                            {userLogout => (
                                <a
                                    className="logout"
                                    onClick={async () => {
                                        // eslint-disable-next-line no-unused-vars
                                        const res = await userLogout()
                                        Router.push('/')
                                    }}
                                >
                                    logout
                                </a>
                            )}
                        </Mutation>
                    )}

                    {loggedIn && <p>hi {user.name} 👋</p>}
                </div>
            </Nav>
        )
    }
}

Index.propTypes = {
    router: PropTypes.object,
    loggedIn: PropTypes.bool,
    user: PropTypes.object,
}

export default withRouter(Index)
