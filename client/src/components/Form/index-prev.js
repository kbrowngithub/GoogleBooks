import React, { Component } from "react";
import { Input, FormBtn } from "../FormMembers";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A book was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          <strong>{this.props.children}</strong>
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        </label>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
          name="query"
          placeholder="Title (required)"
        />
        <FormBtn
          disabled={!(this.state.value)}
          onClick={this.props.cb}
        >
          {this.props.btnName}
        </FormBtn>
      </form>
      
    );
  }
}

export default Form;


