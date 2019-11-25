import React from 'react'
import PropTypes from 'prop-types'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { withApollo, Query } from 'react-apollo'

import {
    UPDATE_LIBRARY_ITEM,
    DELETE_LIBRARY_ITEM,
    GET_LIBRARY_ITEMS_WHERE_ID,
} from '../../lib/graphqlTags'
import SortableItemComp from './SortableItemComp'

import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: ${props => props.theme.green};
    /* max-width: 900px; */
    margin: 60px auto;
`

const SortableList = SortableContainer(({ items, id, deleteLibraryItem }) => {
    return (
        <StyledContainer>
            {items.map((image, index) => {
                return (
                    <SortableItemComp
                        key={`item-${index}`}
                        index={index}
                        image={image}
                        myIndex={index}
                        id={id}
                        deleteLibraryItem={deleteLibraryItem}
                    />
                )
            })}
        </StyledContainer>
    )
})

class Sortable extends React.Component {
    state = {
        items: [],
    }

    componentDidMount() {
        console.log('componentDidMount()')
        const library = this.props.libraryItems
        library.sort((a, b) => (a.index > b.index ? 1 : -1))
        this.setState({
            items: library,
        })
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.libraryItems !== prevProps.libraryItems) {
            const library = this.props.libraryItems
            library.sort((a, b) => (a.index > b.index ? 1 : -1))

            this.setState({
                items: library,
            })
        }
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        // console.log('onSortEnd ')
        this.setState(
            ({ items }) => ({
                items: arrayMove(items, oldIndex, newIndex),
            }),

            () => {
                console.log('CB fn after setState client.mutation()')

                // match the library item index with state
                const items = this.state.items

                for (var i = 0; i < items.length; i++) {
                    items[i].index = i + 1
                    // update the library items index in GraphQL
                    const itemObject = { ...items[i] }

                    this.props.client.mutate({
                        mutation: UPDATE_LIBRARY_ITEM,
                        variables: itemObject,
                    })
                }
            }
        )
    }

    deleteLibraryItem = imageId => {
        // this.setState({
        //     items: library,
        // })

        // Remove the image from the array first for instant result on the frontend
        const Index = this.state.items.findIndex(x => x.id === imageId)
        this.state.items.splice(Index, 1)

        // The remove from the DB
        this.props.client
            .mutate({
                mutation: DELETE_LIBRARY_ITEM,
                variables: {
                    id: imageId,
                },
                refetchQueries: () => [
                    {
                        query: GET_LIBRARY_ITEMS_WHERE_ID,
                        variables: {
                            id: this.props.user.id,
                        },
                    },
                ],
            })
            .then(() => {
                console.log('CB fn after setState client.mutation()')

                // match the library item index with state
                const items = this.state.items

                for (var i = 0; i < items.length; i++) {
                    items[i].index = i + 1
                    // update the library items index in GraphQL
                    const itemObject = { ...items[i] }

                    this.props.client.mutate({
                        mutation: UPDATE_LIBRARY_ITEM,
                        variables: itemObject,
                    })
                }
            })

        this.setState({
            showModal: false,
        })
    }

    myAlert = () => {
        alert('haaa')
    }

    render() {
        // console.log('this .state = ', this.state)
        const { id } = this.props.user
        console.log('this.props = ', this.props)
        return (
            <>
                <div>
                    <SortableList
                        className="sortable-list"
                        items={this.state.items}
                        onSortEnd={this.onSortEnd}
                        // onSortStart={this.onSortStart}
                        // onSortMove={this.onSortMove}
                        axis="xy"
                        distance={1}
                        id={id}
                        deleteLibraryItem={this.deleteLibraryItem}
                    />
                </div>
            </>
        )
    }
}

Sortable.propTypes = {
    user: PropTypes.object,
    client: PropTypes.object,
    libraryItems: PropTypes.array,
}

export default withApollo(Sortable)
