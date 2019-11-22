import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import {
    // USER_LOGGEDIN,
    GET_LIBRARY_ITEMS_WHERE_ID,
    CREATE_LIBRARY_ITEM,
} from '../../lib/graphqlTags'

// import { af } from 'date-fns/esm/locale'

class UploadWidget extends React.Component {
    state = {
        currentIndexTotal: 0,
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

                    // if (info === 'hidden') {
                    //     console.log('YEAH 🗽')

                    //     this.props.client.query({
                    //         query: GET_LIBRARY_ITEMS_WHERE_ID,
                    //         variables: {
                    //             id: id,
                    //         },
                    //     })
                    // }
                }
            }
        )
    }
    render() {
        // console.log('this.state = ', this.state)
        const name = this.props.user.name
        const id = this.props.user.id
        return (
            <button
                onClick={() => {
                    this.uploadWidget(name, id)
                }}
            >
                upload
            </button>
        )
    }
}

UploadWidget.propTypes = {
    user: PropTypes.object,
    client: PropTypes.object,
    // library: PropTypes.array,
}

export default withApollo(UploadWidget)
// export default graphql(ADD_TO_LIBRARY)(UploadWidget)
