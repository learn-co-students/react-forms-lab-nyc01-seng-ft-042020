import React from "react";

class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  validate = (event) => {
      event.preventDefault()
      console.log("Fill in both fields")
  }


  render() {
    return (
      <form onSubmit={ (this.state.username && this.state.password) ? this.props.handleLogin : this.validate }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
