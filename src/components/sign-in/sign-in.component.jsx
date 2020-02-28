import React, { Component } from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    alert('submitted')
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn
