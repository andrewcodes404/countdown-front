import React from 'react'
import { Mutation } from 'react-apollo'
import { UPDATE_USER_MESSAGE, USER_LOGGEDIN } from '../../lib/graphqlTags'

// material ui
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

import FileCopy from '@material-ui/icons/FileCopy'
import styled from 'styled-components'

const Message = styled.div`
    margin: 30px 0;
    .message-input {
        margin-bottom: 30px;
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
        this.state = { message }
    }

    resetState() {
        this.setState({
            message: '',
        })
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value

        this.setState({ [id]: val }, () => {
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
                                // this.resetState()
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
                                    // rows={2}
                                    fullWidth
                                    // rowsMax={4}
                                    // onInput={e => {
                                    //     e.target.value = Math.max(
                                    //         0,
                                    //         parseInt(e.target.value)
                                    //     )
                                    //         .toString()
                                    //         .slice(0, 12)
                                    // }}
                                />
                            </div>

                            <Button
                                margin="normal"
                                type="submit"
                                variant="contained"
                                color="default"
                                size="small"
                                className="submit-btn"
                            >
                                save message
                                <FileCopy className="icon" />
                            </Button>
                        </form>
                    </Message>
                )}
            </Mutation>
        )
    }
}

export default comp_name
