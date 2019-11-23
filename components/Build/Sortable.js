import React from 'react'
import PropTypes from 'prop-types'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { withApollo, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { UPDATE_LIBRARY_ITEM } from '../../lib/graphqlTags'
import SortableItemComp from './SortableItemComp'

import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: ${props => props.theme.green};
    /* max-width: 900px; */
    margin: 60px auto;
`

const SortableList = SortableContainer(({ items, id }) => {
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
                        onSortStart={this.onSortStart}
                        onSortMove={this.onSortMove}
                        axis="xy"
                        distance={1}
                        id={id}
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
