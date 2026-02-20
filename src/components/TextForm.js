import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState('Enter your text here');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="container">

      <h1 className="text-center text-md-start">{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      {/* Responsive Button Container */}
      <div className="row g-2">

        <div className="col-12 col-md-auto">
          <button 
            className="btn btn-primary w-100"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
        </div>

        <div className="col-12 col-md-auto">
          <button 
            className="btn btn-success w-100"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
        </div>

      </div>

    </div>
  )
}