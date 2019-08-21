import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components'

const Wrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    border: 1px solid #000;
`

const QUERY_ALL_USERS = gql`
    query QUERY_ALL_USERS {
        users {
            name
            id
        }
    }
`

const User = props => {
    // console.log('props = ', props)
    return <p>{props.user.name}</p>
}

User.propTypes = {
    user: PropTypes.object,
}

class Index extends Component {
    render() {
        return (
            <Wrapper>
                <Query query={QUERY_ALL_USERS}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        return (
                            <div>
                                {data.users.map(user => (
                                    // <User user={user} key={user.id} />
                                    <p key={user.id}>{user.name}</p>
                                ))}
                            </div>
                        )
                    }}
                </Query>
            </Wrapper>
        )
    }
}

export default Index
