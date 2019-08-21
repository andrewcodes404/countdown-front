import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { USER_REGISTER } from '../../lib/graphqlTags'
import Router from 'next/router'
import Link from 'next/link'
// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'

//style
import { Modal, FormWrapper, Form } from './styleUserForm'

class UserRegister extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordsMatch: true,
        showSuccess: false,
        showError: true,
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [id]: val })
    }

    handleConfirmPasswordChange = e => {
        ;``
        console.log('handle working')
        console.log('this.state = ', this.state)

        const { id, value } = e.target
        this.setState({ [id]: value }, () => {
            if (this.state.password === this.state.confirmPassword) {
                this.setState(
                    { passwordsMatch: true, passwordAlert: false },
                    () => {
                        console.log('ITS TRUE')
                    }
                )
            } else {
                this.setState({ passwordsMatch: false, passwordAlert: true })
            }
        })
    }

    handleCloseModal = () => {
        this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordsMatch: true,
            showSuccess: false,
            showError: false,
        })
        Router.push('/login')
    }
    render() {
        return (
            <>
                {this.state.showSuccess && (
                    <Modal>
                        <div className="modal-card">
                            <h2>
                                a validation email has been sent to{' '}
                                {this.state.email}
                            </h2>

                            <div className="close-btn-wrapper">
                                <Close
                                    className="close-btn"
                                    onClick={this.handleCloseModal}
                                ></Close>
                            </div>
                        </div>
                    </Modal>
                )}

                <FormWrapper>
                    <Mutation mutation={USER_REGISTER} variables={this.state}>
                        {(userRegister, { error, loading }) => (
                            <div>
                                <h2>Register here...</h2>
                                {loading && <p>Loading...</p>}
                                {error && (
                                    <Modal>
                                        <div className="modal-card">
                                            <p>
                                                looks like {this.state.email}{' '}
                                                already has an account &gt;
                                                <Link href="/login">
                                                    <a> Login here</a>
                                                </Link>
                                                <br />
                                                <br /> need to talk to us? &gt;
                                                <a
                                                    href="mailto:hello@countdownwow.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {' '}
                                                    hello@countdownwow.com
                                                </a>
                                            </p>

                                            <div className="close-btn-wrapper">
                                                <Close
                                                    className="close-btn"
                                                    onClick={
                                                        this.handleCloseModal
                                                    }
                                                ></Close>
                                            </div>
                                        </div>
                                    </Modal>
                                )}
                                <Form
                                    method="post"
                                    onSubmit={async e => {
                                        e.preventDefault()
                                        await userRegister()
                                        this.setState({
                                            showSuccess: true,
                                        })
                                    }}
                                >
                                    <TextField
                                        type="text"
                                        id="name"
                                        label="name"
                                        className="textField"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required
                                    />

                                    <TextField
                                        type="text"
                                        id="email"
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
                                        id="password"
                                        label="password"
                                        className="textField"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <p>
                                        {this.state.passwordAlert &&
                                            'pws dont match'}
                                    </p>
                                    <TextField
                                        type="password"
                                        id="confirmPassword"
                                        label="confirm password"
                                        className="textField"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.confirmPassword}
                                        onChange={
                                            this.handleConfirmPasswordChange
                                        }
                                        required
                                        disabled={
                                            this.state.password ? false : true
                                        }
                                    />

                                    <Button
                                        margin="normal"
                                        type="submit"
                                        variant="outlined"
                                        color="default"
                                        size="small"
                                        className="submit-btn"
                                        disabled={
                                            !this.state.passwordsMatch
                                                ? true
                                                : false
                                        }
                                        error={
                                            !this.state.passwordsMatch
                                                ? 'errr'
                                                : 'ok'
                                        }
                                    >
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        )}
                    </Mutation>
                </FormWrapper>
            </>
        )
    }
}

export default UserRegister
