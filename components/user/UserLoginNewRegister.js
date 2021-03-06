import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { USER_LOGIN, USER_LOGGEDIN } from '../../lib/graphqlTags'
import Router from 'next/router'
import Link from 'next/link'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { FormWrapper, Form, SuccessMessage } from './styleUserForm'

class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: 'radar',
        }
    }

    handleChange = e => {
        const { id, value } = e.target
        if (id === 'emailLogin') {
            this.setState({ email: value })
        } else if (id === 'passwordLogin') {
            this.setState({ password: value })
        }
        this.setState({ [id]: value })
    }

    render() {
        return (
            <FormWrapper>
                <Mutation
                    mutation={USER_LOGIN}
                    variables={this.state}
                    refetchQueries={[{ query: USER_LOGGEDIN }]}
                    awaitRefetchQueries
                >
                    {(userLogin, { error, loading }) => (
                        <div>
                            <SuccessMessage>
                                <h2>Thanks for signing up!</h2>
                                <h2>Login here... to build your calendar</h2>

                                <p>
                                    Need to talk to us? &gt;
                                    <a
                                        href="mailto:hello@countdownwow.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        hello@countdownwow.com
                                    </a>
                                </p>
                            </SuccessMessage>
                            {loading && <p>Loading...</p>}
                            {error && (
                                <div>
                                    <p>
                                        Oh no those details are not correct...
                                    </p>
                                    <p>
                                        Do you want to
                                        <Link href="/reset">
                                            <a> reset your password?</a>
                                        </Link>
                                    </p>
                                </div>
                            )}
                            <Form
                                method="post"
                                onSubmit={async e => {
                                    e.preventDefault()

                                    this.setState({
                                        email: '',
                                        password: '',
                                    })

                                    await userLogin()
                                    // could use 'onCompleted' in the muatation instead?
                                    // https://www.apollographql.com/docs/react/essentials/mutations/

                                    Router.push('/build')
                                }}
                            >
                                <TextField
                                    type="text"
                                    id="emailLogin"
                                    label="email"
                                    className="textField"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />

                                <TextField
                                    type="password"
                                    id="passwordLogin"
                                    label="password"
                                    className="textField"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />

                                <Button
                                    margin="normal"
                                    type="submit"
                                    variant="outlined"
                                    color="default"
                                    size="small"
                                    className="submit-btn"
                                >
                                    Login
                                </Button>
                            </Form>
                            {/* <p>
                                Don&apos;t have an account
                                <Link href="/register">
                                    <a> register here</a>
                                </Link>
                            </p> */}
                        </div>
                    )}
                </Mutation>
            </FormWrapper>
        )
    }
}

export default UserLogin
