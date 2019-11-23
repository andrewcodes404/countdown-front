import React from 'react'
import { withRouter } from 'next/router'
import { Query, withApollo } from 'react-apollo'
import { GET_CDW } from '../../lib/graphqlTags'

import Close from '@material-ui/icons/Close'
import Fullscreen from '@material-ui/icons/Fullscreen'

// import styled from 'styled-components'

import {
    PageWrapper,
    Lightbox,
    Grid,
    Cover,
    Item,
    ImageExpand,
    Message,
} from './cdw-style'

// tina's id =   ck0gt6u5v001p0875j00s4jqj

import Timer from './Timer'

///vars for time
const now = new Date()
const year = now.getFullYear()
const month = ('0' + (now.getMonth() + 1)).slice(-2)
// const day = '0' + now.getDate()

// DAY: Sets the day for the Grid

let theDate = null
let day = null
// THEDATE Sets the date to show timer or grid
if (process.env.NODE_ENV === 'production') {
    theDate = '' + year + month + day

    day = ('0' + now.getDate()).slice(-2)
} else {
    theDate = '' + year + month + day

    // console.log('theDate = ', theDate)
    // theDate = 20191201
    theDate = 20191201
    day = '15'
}

class CDW extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', cover: '', library: [], showItem: '' }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        const { id } = this.props.router.query

        this.props.client
            .query({
                query: GET_CDW,
                variables: { id: id },
            })
            .then(result => {
                const user = result.data.users[0]

                const randomizedLibrary = user.library.sort(function() {
                    return 0.5 - Math.random()
                })
                this.setState({
                    name: user.name,
                    cover: user.cover,
                    library: randomizedLibrary,
                    message: user.message,
                    showItem: '',
                    lightbox: '',
                    showMessage: true,
                })
            })
    }

    handleUserIndexClick = index => {
        if (index == day) {
            this.setState({
                showItem: index,
            })
        }
    }

    handleShowLightbox = url => {
        this.setState({
            lightbox: url,
        })
    }

    handleCloseLightbox = () => {
        this.setState({
            lightbox: '',
        })
    }
    handleCloseMessage = () => {
        this.setState({
            showMessage: false,
        })
    }

    render() {
        return (
            <PageWrapper>
                {/* THE TIMER --- THE TIMER --- THE TIMER */}
                <Timer theDate={theDate} name={this.state.name} />

                {/* THE MESSAGE --- THE MESSAGE --- THE MESSAGE ---  */}

                {this.state.showMessage && theDate > 20191130 && (
                    <Message
                        onClick={() => {
                            this.handleCloseMessage()
                        }}
                    >
                        <div className="message-text">
                            <div className="message-close-btn">
                                <Close className="message-close-btn-x" />
                            </div>

                            {/* <span>{this.state.name} says...</span> */}
                            <span>{this.state.message}</span>
                        </div>
                    </Message>
                )}

                {/* THE MODAL ---THE MODAL ---THE MODAL --- */}
                {this.state.lightbox && (
                    <Lightbox
                        onClick={() => {
                            this.handleCloseLightbox()
                        }}
                    >
                        <div className="lightbox-close-btn">
                            <Close className="lightbox-close-btn-x" />
                        </div>

                        <div className="lightbox-img">
                            <img src={this.state.lightbox} alt="" />
                        </div>
                    </Lightbox>
                )}

                {/* THE GRID --- THE GRID --- THE GRID ---- */}

                <Grid>
                    <Cover>
                        <img src={this.state.cover} alt="" />
                    </Cover>

                    {theDate > 20191130 && (
                        <>
                            {this.state.library.map((el, index) => (
                                <Item key={index}>
                                    <div className="number">{}</div>

                                    <div
                                        className={`img-wrapper ${day - 1 <
                                            el.index && 'hide-item'} 
                                                 ${
                                                     this.state.showItem ===
                                                     el.index
                                                         ? 'show-item'
                                                         : ''
                                                 }
                                                `}
                                    >
                                        <img
                                            src={el.secure_url}
                                            onClick={() => {
                                                this.handleShowLightbox(
                                                    el.secure_url
                                                )
                                            }}
                                        />
                                    </div>

                                    <ImageExpand
                                        onClick={() => {
                                            this.handleShowLightbox(
                                                el.secure_url
                                            )
                                        }}
                                    >
                                        <Fullscreen className="img-expand-icon" />
                                    </ImageExpand>

                                    <div
                                        className="users-index"
                                        onClick={() => {
                                            this.handleUserIndexClick(el.index)
                                        }}
                                    >
                                        <h3>{el.index}</h3>
                                    </div>
                                </Item>
                            ))}
                        </>
                    )}
                </Grid>
            </PageWrapper>
        )
    }
}

export default withRouter(withApollo(CDW))
