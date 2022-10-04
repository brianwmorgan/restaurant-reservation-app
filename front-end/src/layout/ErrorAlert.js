import React from "react";

// Defines the alert message to render if the specified error is truthy.
// The 'error' param is an instance of an object with a `.message` property as a string, typically an Error instance.
// Returns a Bootstrap danger alert that contains the message string.

function ErrorAlert({ error }) {
  return (
    error && (
      <div className="alert alert-danger m-2">
        Error: {error.message || error}
      </div>
    )
  );
}

export default ErrorAlert;
