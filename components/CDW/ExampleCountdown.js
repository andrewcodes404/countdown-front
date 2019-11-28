import React from 'react'
import { withRouter } from 'next/router'
import { Query, withApollo } from 'react-apollo'
import { GET_CDW } from '../../lib/graphqlTags'

// comps
import TopBannerExample from './TopBannerExample'

// material ui
import Close from '@material-ui/icons/Close'
import Fullscreen from '@material-ui/icons/Fullscreen'

//style
import {
    PageWrapper,
    Lightbox,
    Grid,
    Cover,
    Item,
    ImageExpand,
    Message,
} from './cdw-style'

///vars for time
const now = new Date()
const year = now.getFullYear()
const month = ('0' + (now.getMonth() + 1)).slice(-2)
// const day = ('0' + now.getDate()).slice(-2)
const day = now.getHours()

// const theDate = year + month + day
const theDate = 20191201

class CDW extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            coverFull: '',
            library: [],
            showItem: '',
            lightbox: '',
            // id: 'ck0gt6u5v001p0875j00s4jqj',
            id: 'ck3bhgd05001c0711oqkatqya',
            showMessage: true,
            removeBlur: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        // const { id } = this.props.router.query

        this.props.client
            .query({
                query: GET_CDW,
                variables: { id: this.state.id },
            })
            .then(result => {
                const user = result.data.users[0]

                const randomizedLibrary = user.library.sort(function() {
                    return 0.5 - Math.random()
                })
                this.setState({
                    name: user.name,
                    coverFull: user.coverFull,
                    library: randomizedLibrary,
                    message: user.message,
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

    handleShowLightbox = (url, url200, url600, url2400) => {
        this.setState({
            lightbox: url,
            lightbox200: url200,
            lightbox600: url600,
            lightbox2400: url2400,
        })
    }

    handleCloseLightbox = () => {
        this.setState({
            lightbox: '',
        })
    }

    handleCloseMessage = () => {
        this.setState({
            removeBlur: true,
        })
        setTimeout(() => {
            this.setState({
                showMessage: false,
            })
        }, 1000)
    }

    render() {
        return (
            <PageWrapper>
                <TopBannerExample
                    url={`https://countdownwow.com/cdw?=${this.state.id}`}
                />

                {/* THE TIMER --- THE TIMER --- THE TIMER */}
                {/* <Timer theDate={theDate} name={this.state.name} /> */}

                {/* THE MESSAGE --- THE MESSAGE --- THE MESSAGE ---  */}
                {this.state.showMessage && (
                    <Message
                        onClick={() => {
                            this.handleCloseMessage()
                        }}
                    >
                        <div
                            className={`message-wrapper  ${this.state
                                .removeBlur && 'fade-out'}`}
                        >
                            <div className="message-text">
                                <div className="message-close-btn">
                                    <Close className="message-close-btn-x" />
                                </div>

                                {/* <span>{this.state.name} says...</span> */}
                                <span>
                                    Happy Xams from CountDownWow, this is an
                                    example calandar 🎅 🎄 🎁 💝
                                </span>
                            </div>
                        </div>
                    </Message>
                )}

                <div
                    className={`below-banner-wrapper blur-me  ${this.state
                        .removeBlur && 'un-blur-me'}`}
                >
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
                                <img
                                    src={this.state.lightbox}
                                    srcSet={`${this.state.lightbox200} 200w, ${this.state.lightbox600} 600w, ${this.state.lightbox2400} 2000w`}
                                    sizes="80vw"
                                />
                            </div>
                        </Lightbox>
                    )}

                    {/* THE GRID --- THE GRID --- THE GRID ---- */}

                    <Grid>
                        <Cover>
                            <img src={this.state.coverFull} alt="" />
                        </Cover>

                        {theDate > 20191130 && (
                            <>
                                {this.state.library.map((el, index) => (
                                    <Item key={index}>
                                        {/* <div className="number">{}</div> */}

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
                                                srcSet={`${el.url200} 200w, ${el.url600} 600w, ${el.url2400} 2000w`}
                                                sizes="min-width(576px) 25vw 16.666vw"
                                                onClick={() => {
                                                    this.handleShowLightbox(
                                                        el.secure_url,
                                                        el.url200,
                                                        el.url600,
                                                        el.url2400
                                                    )
                                                }}
                                            />
                                        </div>

                                        {(day > el.index ||
                                            this.state.showItem ===
                                                el.index) && (
                                            <ImageExpand
                                                onClick={() => {
                                                    this.handleShowLightbox(
                                                        el.secure_url,
                                                        el.url200,
                                                        el.url600,
                                                        el.url2400
                                                    )
                                                }}
                                            >
                                                <Fullscreen className="img-expand-icon" />
                                            </ImageExpand>
                                        )}

                                        <div
                                            className={`users-index ${day <
                                                el.index && 'bad-number'} `}
                                            onClick={() => {
                                                this.handleUserIndexClick(
                                                    el.index
                                                )
                                            }}
                                        >
                                            <h3>{el.index}</h3>
                                        </div>
                                    </Item>
                                ))}
                            </>
                        )}
                    </Grid>
                </div>
            </PageWrapper>
        )
    }
}

export default withRouter(withApollo(CDW))
