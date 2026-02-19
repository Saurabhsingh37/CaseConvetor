import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState('Enter your text here');

  // Convert to Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // Convert to Lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // Handle textbox change (FIXED)
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        //   placeholder="Enter your text here"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-success" onClick={handleLowClick}>
        Convert to Lowercase
      </button>

    </div>
  )
}
