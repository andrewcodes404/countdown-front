import React from 'react'
import { Mutation } from 'react-apollo'
import { UPDATE_USER_MESSAGE, USER_LOGGEDIN } from '../../lib/graphqlTags'

// material ui
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styled from 'styled-components'

const Message = styled.div`
    margin: 30px 0;
    .message-input {
        margin-bottom: 10px;
    }

    .btn-fake-height {
    }

    .btn-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .btn-submit {
        background-color: ${props => props.theme.green};
        color: white;
        font-size: 24px;
        max-width: 235px;

        &:hover {
            background-color: gold;
            color: black;
        }
    }

    @keyframes move-horizontal {
        0% {
            left: 0;
        }
        50% {
            left: 100%;
        }
        100% {
            left: 0;
        }
    }

    .btn-finger {
        font-size: 40px;
        margin-top: 10px;
        margin-left: 10px;
        animation: shake 1.5s 1s infinite;
        /* animation: name duration timing-function delay iteration-count direction
            fill-mode; */
    }
`
class comp_name extends React.Component {
    constructor(props) {
        super(props)

        // stop message being empty is user has not got one yet
        let message
        this.props.user.message
            ? (message = this.props.user.message)
            : (message = '')
        this.state = { message, showAlert: false }
    }

    resetState() {
        this.setState({
            // message: '',
            showAlert: false,
        })
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value

        this.setState({ [id]: val, showAlert: true }, () => {
            // console.log('this.state.id = ', this.state)
        })
    }

    render() {
        return (
            <Mutation
                mutation={UPDATE_USER_MESSAGE}
                variables={{
                    id: this.props.user.id,
                    message: this.state.message,
                }}
                refetchQueries={[
                    {
                        query: USER_LOGGEDIN,
                    },
                ]}
            >
                {(updateUser, { loading, error }) => (
                    <Message>
                        <form
                            // noValidate
                            // autoComplete="off"
                            onSubmit={async e => {
                                console.log('this.state = ', this.state)
                                e.preventDefault()
                                await updateUser()
                                this.resetState()
                            }}
                        >
                            <div>
                                <TextField
                                    id="message"
                                    className="message-input"
                                    // label="Outlined"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    multiline={true}
                                    InputProps={{ style: { fontSize: 40 } }}
                                    fullWidth
                                />
                            </div>

                            <div className="btn-fake-height">
                                {this.state.showAlert && (
                                    <div className="btn-wrapper">
                                        <Button
                                            margin="normal"
                                            type="submit"
                                            variant="contained"
                                            color="default"
                                            size="small"
                                            className="btn-submit"
                                        >
                                            save message
                                        </Button>

                                        <span className="btn-finger">👈</span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </Message>
                )}
            </Mutation>
        )
    }
}

export default comp_name
