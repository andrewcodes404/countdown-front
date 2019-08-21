import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// comps
import Meta from './Meta'
import Navigation from './nav'

const PgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* background: palegreen; */
    .push-down {
        flex: 1;
    }
`

const Content = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
`

class PageWrapper extends React.Component {
    render() {
        const loggedIn = false
        const user = { name: 'bob' }
        return (
            <PgWrapper>
                <Meta />
                <Navigation />
                <Content>
                    {React.Children.map(this.props.children, child =>
                        React.cloneElement(child, {
                            loggedIn,
                            user,
                        })
                    )}
                </Content>
            </PgWrapper>
        )
    }
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageWrapper
