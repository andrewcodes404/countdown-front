import React from 'react'
import gql from 'graphql-tag'
// import { withApollo } from 'react-apollo'
import { SortableElement } from 'react-sortable-hoc'
import { USER_LOGGEDIN } from '../../lib/graphqlTags'

import { Mutation } from 'react-apollo'
// material ui
import Delete from '@material-ui/icons/Delete'

//style
import styled from 'styled-components'

const StyledItem = styled.div`
    cursor: pointer;
    /* min-width: 200px; */
    width: 20%;
    /* height: 200px; */

    .dummy-div-for-height {
        margin-top: 75%;
    }

    position: relative;
    .img-wrapper {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
    }

    img {
        object-fit: cover;
        height: 100%;
    }

    position: relative;

    .number {
        position: absolute;
        z-index: 1;

        top: 0;
        /* bottom: 0; */
        left: 0;
        /* right: 0; */
        background: rgba(252, 186, 3, 0.65);
        height: 40px;
        width: 40px;
        border-bottom-right-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 30px;
            font-weight: 800;
        }
    }
`

const Deletecan = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    background: rgba(252, 186, 3, 0.65);
    height: 40px;
    width: 40px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    /* display: none; */
    opacity: 0;
    transition: ${props => props.theme.transTime};
    ${StyledItem}:hover & {
        opacity: 1;
    }

    &:hover {
        color: orangered;
    }
    .icon {
        font-size: 30px;
    }
`

const Modal = styled.div`
    background: rgba(252, 186, 3, 0.75);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content {
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }

    .buttons {
        width: 70%;
        margin: 20px auto 0;
        display: flex;
        justify-content: space-between;
    }

    .button {
        all: unset;

        border: 1px solid #000;
        padding: 5px 15px;
        border-radius: 5px;
    }

    .button--yes {
        &:hover {
            background: lightgreen;
        }
    }
    .button--no {
        &:hover {
            background: tomato;
            color: white;
        }
    }
`

const DELETE_LIBRARY_ITEM = gql`
    mutation DELETE_LIBRARY_ITEM($id: ID!) {
        deleteLibraryItem(id: $id) {
            id
            secure_url
        }
    }
`

class SortableItemComp extends React.Component {
    state = {
        showModal: false,
    }

    handleHoverOff = () => {
        this.setState({
            showModal: false,
        })
    }

    handleTrash = () => {
        this.setState({
            showModal: true,
        })
    }

    handleNoDelete = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        const {
            myIndex,
            image: { id, secure_url },
        } = this.props

        // console.log('image.id = ', image.id)
        return (
            <StyledItem onMouseLeave={this.handleHoverOff}>
                {this.state.showModal && (
                    <Modal>
                        <div className="content">
                            <h5>Are you sure you want to delete this?</h5>
                            .id
                            <div className="buttons">
                                {/* <DeleteImage id={image.id} /> */}
                                <Mutation
                                    mutation={DELETE_LIBRARY_ITEM}
                                    variables={{ id: id }}
                                    refetchQueries={[
                                        {
                                            query: USER_LOGGEDIN,
                                        },
                                    ]}
                                    awaitRefetchQueries={true}
                                    update={(
                                        cache,
                                        { data: { deleteLibraryItem } }
                                    ) => {
                                        //the item we deleted with the id init👇
                                        console.log(
                                            'deleteLibraryItem.id = ',
                                            deleteLibraryItem.id
                                        )
                                        //the current cach that we want to update 👇
                                        const currentCache = cache.readQuery({
                                            query: USER_LOGGEDIN,
                                        })

                                        console.log(
                                            'currentCache.userLoggedIn.library = ',
                                            currentCache.userLoggedIn.library
                                        )

                                        const library =
                                            currentCache.userLoggedIn.library

                                        const updatedLibrary = library.filter(
                                            x => {
                                                return (
                                                    x.id != deleteLibraryItem.id
                                                )
                                            }
                                        )

                                        console.log(
                                            'updatedLibrary = ',
                                            updatedLibrary
                                        )

                                        currentCache.userLoggedIn.library = updatedLibrary
                                        const user = currentCache.userLoggedIn

                                        console.log('user = ', user)

                                        cache.writeQuery({
                                            query: USER_LOGGEDIN,
                                            data: {
                                                userLoggedIn: user,
                                            },
                                        })
                                    }}
                                    onCompleted={() => {
                                        console.log('it completed')
                                        console.log('this.state = ', this.state)
                                        console.log('this.props = ', this.props)
                                        this.setState({
                                            showModal: false,
                                        })
                                    }}
                                >
                                    {(deleteLibraryItem, { loading, data }) => {
                                        return (
                                            <button
                                                className="button button--yes"
                                                // onClick={this.handleYesDelete}
                                                onClick={() => {
                                                    deleteLibraryItem()
                                                }}
                                            >
                                                Yes
                                            </button>
                                        )
                                    }}
                                </Mutation>
                                <button
                                    className="button button--no"
                                    onClick={this.handleNoDelete}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                )}

                <div className="number">
                    <span>{myIndex + 1}</span>
                </div>
                <Deletecan>
                    <Delete className="icon" onClick={this.handleTrash} />
                </Deletecan>
                <div className="img-wrapper ">
                    <img src={secure_url} alt="" srcSet="" />
                </div>

                <div className="dummy-div-for-height "></div>
            </StyledItem>
        )
    }
}

export default SortableElement(SortableItemComp)
// export default withApollo(SortableElement(SortableItemComp))
