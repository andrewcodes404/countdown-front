import React from 'react'
import Link from 'next/link'
import { TopBannerStyle } from './cdw-style'
// import GoogleUrlShortner from 'react-google-url-shortner'

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

    // componentDidMount() {
    //     this.setState({})
    // }

    render() {
        const now = new Date()

        const hours = now.getHours()
        const mins = now.getMinutes()

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
                        <p>
                            Using the 24hr clock not date, so you need to find
                            the{' '}
                            <span style={{ color: 'white' }}>
                                {hours}th square
                            </span>
                        </p>
                    </div>
                </div>
            </TopBannerStyle>
        )
    }
}

export default TopBanner
