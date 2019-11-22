import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import styled from 'styled-components'

const Wrapper = styled.div`
    /* width: 80%; */
    /* margin: 0 auto; */

    .library {
        display: flex;
        flex-wrap: wrap;

        margin: 20px 0;
    }

    .library--image {
        width: 100px;
        height: 100px;
        margin-right: 10px;
        margin-bottom: 10px;
        border: 1px solid #000;
        img {
            object-fit: cover;
            height: 100%;
        }
    }
`

const QUERY_LIBRARY = gql`
    query QUERY_LIBRARY {
        libraryItems(where: { user: { id: "ck0gt6u5v001p0875j00s4jqj" } }) {
            secure_url
            id
        }
    }
`

// libraryItem.propTypes = {
//     libraryItem: PropTypes.object,
// }

class Index extends Component {
    render() {
        // console.log('this.props from LIBQUERY = ', this.props)
        // console.log('this.props.user.id = ', this.props.user.id)

        const userId = this.props.user.id
        return (
            <Wrapper>
                <Query query={QUERY_LIBRARY} variables={{ userId }}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        // console.log('data = ', data)
                        return (
                            <div className="library">
                                {data.libraryItems.map(libraryItem => (
                                    <div
                                        key={libraryItem.id}
                                        className="library--image"
                                    >
                                        <img
                                            src={libraryItem.secure_url}
                                            alt=""
                                            srcSet=""
                                        />
                                    </div>
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
