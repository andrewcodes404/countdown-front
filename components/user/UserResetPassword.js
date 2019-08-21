import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { USER_LOGIN } from '../../lib/graphqlTags'
import Router from 'next/router'
import Link from 'next/link'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { FormWrapper, Form } from './styleUserForm'

class UserResetPassword extends Component {
    state = {
        name: '',
        email: '',
        password: 'radar',
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

    handleConfirmPasswordChange = e => {
        console.log('handle working')
        console.log('this.state = ', this.state)

        const { id, value } = e.target
        this.setState({ [id]: value }, () => {
            if (this.state.password === this.state.confirmPassword) {
                this.setState({ passwordsMatch: true, passwordAlert: false })
            } else {
                this.setState({ passwordsMatch: false, passwordAlert: true })
            }
        })
    }
    render() {
        return (
            <FormWrapper>
                <Mutation
                    mutation={USER_LOGIN}
                    variables={this.state}
                    // refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                >
                    {(userRegister, { error, loading }) => (
                        <div>
                            <p>we will send you an email to reset your PW</p>
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
                                    await userRegister()
                                    this.setState({
                                        name: '',
                                        email: '',
                                        password: '',
                                    })
                                    Router.push('/')
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

                                <Button
                                    type="submit"
                                    variant="outlined"
                                    color="default"
                                    className="submit-btn"
                                >
                                    Send reset email
                                </Button>
                            </Form>
                            <p>
                                Don&apos;t have an account
                                <Link href="/register">
                                    <a> register here</a>
                                </Link>
                            </p>
                        </div>
                    )}
                </Mutation>
            </FormWrapper>
        )
    }
}

export default UserResetPassword
