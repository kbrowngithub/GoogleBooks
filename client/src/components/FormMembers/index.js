import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Label(props) {
  return (
    <label>
      <strong>{props.children}</strong>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
  )
}

export function Input(props) {
  return (
    <div className="form-group">
      {/* <label><strong>Book Search</strong></label> */}
      {/* <p>Book</p> */}
      <input className="form-control" type="text" value={props.q} onChange={props.handleInputChange} name="q" required {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
