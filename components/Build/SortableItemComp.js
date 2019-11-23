import React from 'react'
import gql from 'graphql-tag'
// import { withApollo } from 'react-apollo'
import { SortableElement } from 'react-sortable-hoc'
import {
    USER_LOGGEDIN,
    GET_LIBRARY_ITEMS_WHERE_ID,
    DELETE_LIBRARY_ITEM,
} from '../../lib/graphqlTags'

import { withApollo } from 'react-apollo'
// material ui
import Delete from '@material-ui/icons/Delete'

//style
import styled from 'styled-components'

const StyledItem = styled.div`
    cursor: pointer;
    /* min-width: 200px; */
    width: 25%;
    /* height: 200px; */

    @media (min-width: 576px) {
        width: 16.666%;
    }

    .dummy-div-for-height {
        margin-top: 85%;
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
        left: 0;

        background: ${props => props.theme.green};

        height: 22px;
        width: 22px;

        border-bottom-right-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 14px;
            margin: 0;
            font-weight: 400;
            color: white;
        }

        @media (min-width: 576px) {
            height: 40px;
            width: 40px;
            span {
                font-size: 20px;
            }
        }
    }
`

const Deletecan = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    background: ${props => props.theme.green};
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
    color: white;
    &:hover {
        color: orangered;
    }
    .icon {
        font-size: 25px;
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
    /* justify-content: center; */
    /* align-items: flex-start; */

    .content {
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }

    .buttons {
        width: 70%;
        margin: 10px auto 0;
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

    // deleteLibraryItem = () => {
    //     this.props.client.mutate({
    //         mutation: DELETE_LIBRARY_ITEM,
    //         variables: {
    //             id: this.props.image.id,
    //         },
    //         refetchQueries: () => [
    //             {
    //                 query: GET_LIBRARY_ITEMS_WHERE_ID,
    //                 variables: {
    //                     id: this.props.id,
    //                 },
    //             },
    //         ],
    //     })

    //     this.setState({
    //         showModal: false,
    //     })
    // }

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
                            <h5>Delete this image?</h5>

                            <div className="buttons">
                                {/* <DeleteImage id={image.id} /> */}

                                <button
                                    className="button button--yes"
                                    // onClick={this.handleYesDelete}
                                    onClick={() => {
                                        this.props.deleteLibraryItem(id)
                                    }}
                                >
                                    Yes
                                </button>

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

// export default SortableElement(SortableItemComp)
export default withApollo(SortableElement(SortableItemComp))
