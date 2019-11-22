import React from 'react'
import PropTypes from 'prop-types'
// the timer
import Countdown from 'react-countdown-now'

import { TimerStyled, TheClock } from './cdw-style'

const timerTarget = 'Sat, 01 Dec 2019 00:00:00'
// if (process.env.NODE_ENV === 'production') {
//     timerTarget = 'Sat, 01 Dec 2018 00:00:00'
// }

const timerRender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return null
    } else {
        // Render a timer
        return (
            <TheClock>
                {days}
                <span className="">d</span>:{hours}h:{minutes}m:
                <div className="secs">{seconds}</div>s
            </TheClock>
        )
    }
}

class Timer extends React.Component {
    render() {
        return (
            <>
                {this.props.theDate < 20191201 ? (
                    <TimerStyled>
                        <div className="message">
                            <h1>
                                Timer to {this.props.name}'s advent calendar
                            </h1>
                            <Countdown
                                date={timerTarget}
                                renderer={timerRender}
                            />
                        </div>

                        {/* <FollowerForm
                                        test={'a test'}
                                        calId={this.state.calId}
                                        calCreator={this.state.username}
                                    /> */}
                    </TimerStyled>
                ) : null}
            </>
        )
    }
}

Timer.propTypes = {
    theDate: PropTypes.number,
    name: PropTypes.string,
}

export default Timer
