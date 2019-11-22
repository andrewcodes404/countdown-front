import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { withApollo, Query } from 'react-apollo'
import gql from 'graphql-tag'
import dynamic from 'next/dynamic'

import LibraryQuery from './LibraryQuery'
import UploadWidget from './UploadWidget'
import Sortable from './Sortable'
import CoverPicker from './CoverPicker'
import Message from './Message'
import Example from './Example'
import {
    GET_LIBRARY_ITEMS_WHERE_ID,
    CREATE_LIBRARY_ITEM,
} from '../../lib/graphqlTags'

//material ui

// style
import styled from 'styled-components'

class Build extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndexTotal: 0,
        }
    }

    componentDidMount() {
        const currentIndexTotal = this.props.user.library.length
        this.setState({
            currentIndexTotal,
        })
    }

    uploadWidget = (name, id) => {
        const cloudFolder = `my_foldername/${name}_${id}`

        window.cloudinary.openUploadWidget(
            {
                cloudName: 'countdownwow',
                uploadPreset: 'countdownwow_unsigned',
                maxImageWidth: 2400,
                maxImageHeight: 2400,
                // maxFiles: imgLeft,
                tags: [name, id, 'countdownWow'],
                folder: cloudFolder,
                showCompletedButton: true,
            },
            (err, result) => {
                if (!err) {
                    console.log('💾 A result has happened')
                    console.log('result = ', result)
                    const url = result.info.secure_url
                    const info = result.info

                    if (url) {
                        // this.state.imageArray.push(url)
                        // Use Apollo mutation to add to users imagelibrary
                        // https://stackoverflow.com/questions/56417197/apollo-mutations-without-react-mutation-component

                        this.setState(prevState => {
                            return {
                                currentIndexTotal:
                                    prevState.currentIndexTotal + 1,
                            }
                        })

                        const index = this.state.currentIndexTotal

                        // REFETCH HELL SORTED HERE https://github.com/apollographql/apollo-client/issues/1900   @MitchEff's post

                        this.props.client.mutate({
                            mutation: CREATE_LIBRARY_ITEM,
                            variables: {
                                secure_url: url,
                                index: index,
                            },
                            refetchQueries: () => [
                                {
                                    query: GET_LIBRARY_ITEMS_WHERE_ID,
                                    variables: {
                                        id: id,
                                    },
                                },
                            ],
                        })
                    }

                    if (info === 'hidden') {
                        console.log('YEAH 🗽')

                        this.props.client.query({
                            query: GET_LIBRARY_ITEMS_WHERE_ID,
                            variables: {
                                id: id,
                            },
                        })
                    }
                }
            }
        )
    }

    render() {
        // console.log('this.props from index = ', this.props.user)
        const {
            user: { name, id },
        } = this.props

        // console.log('name = ', name)
        console.log('this.props ☠️ = ', this.props)

        return (
            <Query query={GET_LIBRARY_ITEMS_WHERE_ID} variables={{ id }}>
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    // console.log('data = ', data)

                    return (
                        <>
                            <h1>Build CoutndownWow</h1>
                            <h3>
                                1. UPLOAD YOUR PHOTOS{' '}
                                <button
                                    onClick={() => {
                                        this.uploadWidget(name, id)
                                    }}
                                >
                                    upload
                                </button>
                            </h3>

                            {/* <UploadWidget user={this.props.user} /> */}

                            <h3>Arrange your photos</h3>
                            <Sortable
                                user={this.props.user}
                                libraryItems={data.libraryItems}
                            />

                            <h3>4. Pick a cover image for your countdownWow</h3>

                            <CoverPicker user={this.props.user} />
                            <h3>5. Write a message</h3>
                            <Message user={this.props.user} />
                            <h3>6. Show example</h3>
                            <Example user={this.props.user} />
                            <h3>7. Launch 🚀</h3>
                        </>
                    )
                }}
            </Query>
        )
    }
}

Build.propTypes = {
    user: PropTypes.object,
}

export default withApollo(Build)
