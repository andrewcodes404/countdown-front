import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { USER_LOGOUT, USER_LOGGEDIN } from '../../../lib/graphqlTags'
import Link from 'next/link'
import Router from 'next/router'
import { withRouter } from 'next/router'
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;

    /* justify-content: center; */
    align-items: center;
    a {
        margin-right: 10px;
        line-height: 1;
    }
    p {
        color: grey;
        margin-right: 10px;
    }

    .logout {
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.hoverColor};
        }
    }

    .current-page {
        color: orange;
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
                <Link href="/">
                    <a className={asPath === '/' ? 'current-page' : ''}>home</a>
                </Link>

                {!loggedIn && (
                    <Link href="/login">
                        <a
                            className={
                                asPath === '/login' ? 'current-page' : ''
                            }
                        >
                            login/register
                        </a>
                    </Link>
                )}

                {loggedIn && (
                    <Link href="/account">
                        <a
                            className={
                                asPath === '/account' ? 'current-page' : ''
                            }
                        >
                            account
                        </a>
                    </Link>
                )}

                {loggedIn && (
                    <Link href="/build">
                        <a
                            className={
                                asPath === '/build' ? 'current-page' : ''
                            }
                        >
                            build
                        </a>
                    </Link>
                )}

                {loggedIn && (
                    <Mutation
                        mutation={USER_LOGOUT}
                        refetchQueries={[{ query: USER_LOGGEDIN }]}
                    >
                        {userLogout => (
                            <p
                                className="logout"
                                onClick={async () => {
                                    // eslint-disable-next-line no-unused-vars
                                    const res = await userLogout()
                                    Router.push('/')
                                }}
                            >
                                logout
                            </p>
                        )}
                    </Mutation>
                )}

                {loggedIn && <p>hi {user.name}</p>}
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
