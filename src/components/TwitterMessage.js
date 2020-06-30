import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
  }}

  handleEvent = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.message} onChange={this.handleEvent}/>
          <h2>{this.props.maxChars - this.state.message.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
