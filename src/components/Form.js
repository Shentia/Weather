import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <Form>
        <input type="text" name="city" placeholder="City ..." />
        <input type="text" name="country" placeholder="Country ..." />
        <button>Get Weather </button>
      </Form>
    );
  }
}

export default Form;
