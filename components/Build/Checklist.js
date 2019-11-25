import React from 'react'

import styled from 'styled-components'

const ChecklistStyled = styled.div`
    text-align: center;
    margin: 100px 0 200px;
    p {
        font-size: 24px;
    }

    .cross {
        color: red;
        margin-right: 20px;
    }

    .tick {
        color: green;
        margin-right: 20px;
    }
`

class Checklist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imgCount: this.props.imgCount,
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.imgCount !== prevProps.imgCount) {
            this.setState({
                imgCount: this.props.imgCount,
            })
        }
    }

    render() {
        return (
            <ChecklistStyled>
                <h2>
                    Scroll back up to complete these steps and then launch your
                    CountDownWow
                </h2>

                {this.props.imgCount === 24 ? (
                    <p>
                        Upload images <span className="tick"> &#10003;</span>
                    </p>
                ) : (
                    <div>
                        <p>
                            Upload images{' '}
                            <span className="cross">&#10008;</span>
                            You need to upload {24 - this.props.imgCount} more
                            image
                            {this.state.imgLeft > 1 && 's'}
                        </p>
                    </div>
                )}

                {this.props.coverUrl ? (
                    <p>
                        Choose a cover <span className="tick"> &#10003;</span>
                    </p>
                ) : (
                    <div>
                        <p>
                            Choose a cover{' '}
                            <span className="cross">&#10008;</span>
                            Please pick a cover image for the calendar
                        </p>
                    </div>
                )}

                {this.props.xmasMessage ? (
                    <p>
                        Write a message <span className="tick"> &#10003;</span>
                    </p>
                ) : (
                    <div>
                        <p>
                            Write a message{' '}
                            <span className="cross">&#10008;</span> Send some
                            holiday cheer, write a message
                        </p>
                    </div>
                )}
            </ChecklistStyled>
        )
    }
}

export default Checklist
