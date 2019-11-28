import React from 'react'
import PropTypes from 'prop-types'
import { withApollo, Query } from 'react-apollo'

// import UploadWidget from './UploadWidget'
import Sortable from './Sortable'
import CoverPicker from './CoverPicker'
import Message from './Message'

import Preview from './Preview'
import Checklist from './Checklist'

import {
    GET_LIBRARY_ITEMS_WHERE_ID,
    CREATE_LIBRARY_ITEM,
} from '../../lib/graphqlTags'

//material ui
import Button from '@material-ui/core/Button'

// style
import styled from 'styled-components'

const PageWrapper = styled.div`
    width: 90%;
    margin: 0 auto;

    .upload-btn--wrapper {
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        text-align: center;
        @media (min-width: 576px) {
            text-align: unset;
        }
    }

    .upload-btn {
        background-color: ${props => props.theme.green};
        color: white;
        margin: 30px auto 20px;
        font-size: 24px;

        &:hover {
            background-color: gold;
            color: black;
        }
    }
`

class Build extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndexTotal: 0,
            galleryLength: 0,
            imgsUploaded: this.props.user.library.length,
            checklistComplete: false,
            imgLeft: 24 - this.props.user.library.length,
            imgCountComplete: '',
            imgCount: '',
            coverPicked: this.props.user.coverFull,
            coverUrl: this.props.user.coverFull,
            xmasMessage: this.props.user.message,
        }
    }

    componentDidMount() {
        const currentIndexTotal = this.props.user.library.length
        this.setState({
            currentIndexTotal,
        })

        console.log('this.props 👍 = ', this.props)
    }

    uploadWidget = (name, id, imgCount) => {
        const cloudFolder = `advent/${name}_${id}`

        const imgLeft = 24 - imgCount
        // console.log('imgLeft = ', imgLeft)
        // console.log('typeof imgLeft = ', typeof imgLeft)

        window.cloudinary.openUploadWidget(
            {
                cloudName: 'countdownwow',
                uploadPreset: 'countdownwow_unsigned',
                maxImageWidth: 2400,
                maxImageHeight: 2400,
                maxFiles: imgLeft,
                tags: [name, id, 'countdownWow'],
                folder: cloudFolder,
                // showCompletedButton: true,
                text: {
                    en: {
                        queue: {
                            // "title": "Upload Queue",
                            title: 'Upload Finished',
                            title_uploading_with_counter:
                                'Uploading {{num}} Assets',
                            title_uploading: 'Uploading Assets',
                            mini_title: 'Uploaded',
                            mini_title_uploading: 'Uploading',
                            show_completed: 'Show completed',
                            retry_failed: 'Retry failed',
                            abort_all: 'Abort all',
                            upload_more: 'Upload More',
                            more: 'More',
                            mini_upload_count: '{{num}} Uploaded',
                            mini_failed: '{{num}} Failed',
                            statuses: {
                                uploading: 'Uploading...',
                                error: 'Error',
                                uploaded: 'Done',
                                aborted: 'Aborted',
                            },
                        },
                        notifications: {
                            general_error: 'An error has occurred',
                            general_prompt: 'Are you sure?',
                            // "limit_reached": "No more files can be selected",
                            limit_reached: `You have a maximum of ${imgLeft} images left`,
                            invalid_add_url: 'Added URL must be valid',
                            invalid_public_id:
                                'Public ID cannot contain \\,?,&,#,%,<,>',
                            no_new_files: 'File(s) have already been uploaded',
                        },
                    },
                },
            },
            (err, result) => {
                if (!err) {
                    // if (result.info.eager) {
                    //     console.log('result.info = ', result.info)

                    // }

                    console.log('result = ', result)

                    if (result.event == 'success') {
                        this.setState(prevState => {
                            return {
                                currentIndexTotal:
                                    prevState.currentIndexTotal + 1,
                            }
                        })

                        const index = this.state.currentIndexTotal
                        const url600 = result.info.eager[0].secure_url
                        const url2400 = result.info.eager[1].secure_url
                        const url200 = result.info.eager[2].secure_url
                        const urlOrig = result.info.secure_url

                        // REFETCH HELL SORTED HERE https://github.com/apollographql/apollo-client/issues/1900   @MitchEff's post

                        this.props.client.mutate({
                            mutation: CREATE_LIBRARY_ITEM,
                            variables: {
                                secure_url: urlOrig,
                                url200: url200,
                                url600: url600,
                                url2400: url2400,
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
                }
            }
        )
    }

    handleLaunchBtn = () => {}

    render() {
        const {
            user: { name, id },
        } = this.props

        return (
            <Query query={GET_LIBRARY_ITEMS_WHERE_ID} variables={{ id }}>
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>

                    const imgCount = data.libraryItems.length

                    return (
                        <PageWrapper>
                            <h3>
                                1. Upload your images ( you have uploaded{' '}
                                {imgCount}/24 images )
                            </h3>

                            <div className="upload-btn--wrapper">
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        this.uploadWidget(name, id, imgCount)
                                    }}
                                    className="upload-btn"
                                    disabled={imgCount >= 24}
                                >
                                    upload
                                </Button>
                            </div>

                            <h3>2. Drag to order your images</h3>
                            <h4> 1 = 1st December, 24 = Christmas Eve</h4>

                            <Sortable
                                user={this.props.user}
                                libraryItems={data.libraryItems}
                            />
                            <h3>4. Pick a cover image for your countdownWow</h3>
                            <CoverPicker user={this.props.user} />
                            <h3>5. Write a message of festive cheer 🎅</h3>
                            <Message user={this.props.user} />

                            <div>
                                {imgCount === 24 &&
                                this.props.user.coverFull &&
                                this.props.user.message ? (
                                    <Preview user={this.props.user} />
                                ) : (
                                    <Checklist
                                        imgLeft={this.state.imgLeft}
                                        imgCountComplete={
                                            this.state.imgCountComplete
                                        }
                                        imgCount={imgCount}
                                        coverPicked={this.props.user.coverFull}
                                        coverFull={this.props.user.coverFull}
                                        xmasMessage={this.props.user.message}
                                    />
                                )}
                            </div>
                        </PageWrapper>
                    )
                }}
            </Query>
        )
    }
}

Build.propTypes = {
    user: PropTypes.object,
    client: PropTypes.object,
}

export default withApollo(Build)
