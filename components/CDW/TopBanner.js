import React from 'react'
import Link from 'next/link'
import { TopBannerStyle } from './cdw-style'
// import GoogleUrlShortner from 'react-google-url-shortner'

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    EmailIcon,
} from 'react-share'

class TopBanner extends React.Component {
    constructor(props) {
        super(props)
        // Don't call this.setState() here!

        this.state = {
            // url: `https://countdownwow.com/cdw?=${this.props.id}`,
            message: `WOWSERS TROUSERS ❄️ Check out this amazing digital advent calendar 🎅📆⏱️ `,
            messageNoEmos: `WOWSERS TROUSERS  Check out this digital advent calendar`,
        }
    }

    render() {
        return (
            <TopBannerStyle>
                <div className="banner-wrapper">
                    <div className="item-left">
                        <p>
                            Would you like your own CountDownWow?{' '}
                            <Link href="/">
                                <a>CLICK HERE</a>
                            </Link>{' '}
                        </p>
                    </div>

                    <div className="item-right">
                        <div className="item-right-message">
                            <p>Share this calender </p>
                            <div className="hand">👉</div>
                        </div>

                        <div className="icons">
                            <FacebookShareButton
                                url={this.props.url}
                                quote={this.state.messageNoEmos}
                                className="icon-wrapper"
                            >
                                <div className="icon">
                                    <img
                                        src="../../static/social/facebook.png"
                                        alt=""
                                    />
                                </div>
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={this.props.url}
                                title={this.state.message}
                                className="share-btn"
                                via={this.state.countdownwow}
                            >
                                <div className="icon">
                                    <img
                                        src="/static/social/twitter.png"
                                        alt=""
                                    />
                                </div>
                            </TwitterShareButton>

                            <WhatsappShareButton url={this.props.url}>
                                <div className="icon">
                                    <img
                                        src="/static/social/whatsapp.png"
                                        alt=""
                                    />
                                </div>
                            </WhatsappShareButton>

                            <LinkedinShareButton url={this.props.url}>
                                <div className="icon">
                                    <img
                                        src="/static/social/linkedin.png"
                                        alt=""
                                    />
                                </div>
                            </LinkedinShareButton>

                            <EmailShareButton
                                url={this.props.url}
                                subject={this.state.messageNoEmos}
                                body="Have you seen these online advent calendars they are brilliant"
                                openWindow={true}
                            >
                                <div className="icon">
                                    <img src="/static/social/mail.png" alt="" />
                                </div>
                            </EmailShareButton>
                        </div>
                    </div>
                </div>
            </TopBannerStyle>
        )
    }
}

export default TopBanner
