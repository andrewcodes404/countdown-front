import React, { Component } from 'react'
import { Mutation, withApollo } from 'react-apollo'
import { USER_REGISTER, USER_LOGGEDIN } from '../../lib/graphqlTags'
import Router from 'next/router'
import Link from 'next/link'
// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'
import ReCAPTCHA from 'react-google-recaptcha'

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
        captcha: false,
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [id]: val })
    }

    handleConfirmPasswordChange = e => {
        const { id, value } = e.target
        this.setState({ [id]: value }, () => {
            if (this.state.password === this.state.confirmPassword) {
                this.setState({ passwordsMatch: true, passwordAlert: false })
            } else {
                this.setState({ passwordsMatch: false, passwordAlert: true })
            }
        })
    }

    onChange = value => {
        this.setState({
            captcha: true,
        })
    }

    render() {
        return (
            <FormWrapper>
                <Mutation
                    mutation={USER_REGISTER}
                    variables={this.state}
                    // refetchQueries={[{ query: USER_LOGGEDIN }]}
                >
                    {(userRegister, { error, loading }) => (
                        <div className="user-regester-form">
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
                                                onClick={this.handleCloseModal}
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
                                    Router.push('/login')
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
                                    fullWidth={true}
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
                                    fullWidth={true}
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
                                    fullWidth={true}
                                />

                                <TextField
                                    type="password"
                                    id="confirmPassword"
                                    label="confirm password"
                                    className="textField"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleConfirmPasswordChange}
                                    required
                                    fullWidth={true}
                                    disabled={
                                        this.state.password ? false : true
                                    }
                                />

                                <p>
                                    {this.state.passwordAlert &&
                                        'pws dont match'}
                                </p>
                                <ReCAPTCHA
                                    sitekey={
                                        '6LcyO8QUAAAAAJiL0JR9Id8eewEvPFHAzdfCNOoH'
                                    }
                                    onChange={this.onChange}
                                    className="recaptcha"
                                    // size="compact"
                                />

                                <Button
                                    fullWidth={true}
                                    margin="normal"
                                    type="submit"
                                    variant="outlined"
                                    color="default"
                                    size="small"
                                    className="submit-btn"
                                    disabled={
                                        (!this.state.passwordsMatch ||
                                            !this.state.captcha) &&
                                        true
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
        )
    }
}

export default withApollo(UserRegister)
