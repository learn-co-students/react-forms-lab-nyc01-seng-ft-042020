import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();
    
    this.state = {
      message: "",
      // charsRemaining: this
    };

    console.log(this.state)
  }

  charsRemaining() {
    return this.props.maxChars - this.state.message.length
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <p>Characters remaining: {this.charsRemaining()} </p>
      </div>
    );
  }
}

export default TwitterMessage;
