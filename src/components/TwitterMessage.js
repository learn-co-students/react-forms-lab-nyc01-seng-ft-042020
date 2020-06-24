import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet:'',
      charsRemaining: this.props.maxChars
    };
  }
  handleChange=(event)=>{    
    this.setState({
      tweet:event.target.value,
      charsRemaining:this.props.maxChars-event.target.value.length
    });
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(e)=>this.handleChange(e)}type="text" name="message" id="message" value={this.state.tweet}/>
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
