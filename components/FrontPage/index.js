import React from 'react'
import Link from 'next/link'

//comps
import UserRegister from '../user/UserRegister'
import UserLogin from '../user/UserLogin'

import {
    Banner,
    PageWrapper,
    Headlines,
    ThreeSteps,
    Login,
} from './frontPageStyle'

//files
const calVid = './static/cal.mp4'

const videoBkg = './static/cal.png'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageWrapper>
                <Banner>
                    {/* <div className="banner-alert">
                        <p>
                            It's not too late!! You can create a countdown
                            calendar starting from today Just{' '}
                            <span className="banner-alert-btn"> SIGN UP</span>
                        </p>
                    </div> */}

                    <div className="banner-video-cont">
                        <video
                            src={calVid}
                            controls
                            muted
                            loop={true}
                            type="video/mp4"
                            poster={videoBkg}
                        ></video>
                    </div>
                </Banner>

                <Headlines>
                    <div className="headline-strip">
                        <h1>
                            Make your own digital CountdownWow advent calendar
                        </h1>
                    </div>

                    <div className="strapline-strip">
                        <h2>
                            Share your best photos of 2019 with family and
                            friends
                        </h2>
                    </div>
                </Headlines>

                <ThreeSteps>
                    <div className="three-steps-wrapper">
                        <h2 className="three-steps-headline">
                            Your countdown calendar in three easy steps:
                        </h2>
                        <div className="three-steps">
                            <div className="step-item">
                                <div className="step-number">
                                    <h3>1</h3>
                                </div>

                                <p>
                                    Login &amp; upload images from your folders,
                                    facebook or instagram.
                                </p>
                            </div>

                            <div className="step-item">
                                <div className="step-number">
                                    <h3>2</h3>
                                </div>
                                <p>
                                    Pick a cover image &amp; write a festive
                                    message.
                                </p>
                            </div>

                            <div className="step-item">
                                <div className="step-number">
                                    <h3>3</h3>
                                </div>
                                <p>
                                    Launch your calendar and share your unique
                                    link with friends &amp; family.
                                </p>
                            </div>
                        </div>
                    </div>
                </ThreeSteps>

                <h2 className="example-link">
                    Have look at an example here{' '}
                    <Link href="/example">
                        <a target="_blank">example-xmas-calendar</a>
                    </Link>
                </h2>

                <Login id="login">
                    <UserRegister />
                    <UserLogin />
                </Login>
            </PageWrapper>
        )
    }
}

export default Home
