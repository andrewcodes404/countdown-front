import React from 'react'
// import { Link } from 'react-router-dom'

//comps
// import Login from './authorise/Login'
// import Register from './authorise/Register'
// import Navigation from './Navigation'
// import Footer from './Footer'
import ScrollIntoView from 'react-scroll-into-view'

import UserRegister from '../user/UserRegister'
import UserLogin from '../user/UserLogin'

import {
    Banner,
    PageWrapper,
    Headlines,
    ThreeSteps,
    Login,
    Navigation,
} from './frontPageStyle'

//files
const calVid = './static/cal.mov'

const videoBkg = './static/cal.png'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageWrapper>
                <Navigation>
                    <div className="menu">
                        <h1>CDWow</h1>

                        <ScrollIntoView selector="#login">
                            <p>Register/Login</p>
                        </ScrollIntoView>
                    </div>
                </Navigation>

                <Banner>
                    {/* <div className="banner-alert">
                        <p>
                            It's not too late!! You can create a countdown
                            calendar starting from today Just{' '}
                            <span className="banner-alert-btn"> SIGN UP</span>
                        </p>
                    </div> */}

                    <div className=" banner-video-cont">
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
                    <div className="x-page-content">
                        <div className="the-three-steps">
                            <h2 className="three-steps-headline">
                                Your countdown calendar in three easy steps:
                            </h2>
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

                            {/* <h2 className="three-steps-headline">
                            Have look at an example here{' '}
                            <Link to="/example/xmas">
                                example-xmas-calendar
                            </Link>{' '}
                        </h2> */}
                        </div>
                    </div>
                </ThreeSteps>

                <Login id="login">
                    <UserRegister />
                    <UserLogin />
                </Login>
            </PageWrapper>
        )
    }
}

export default Home
