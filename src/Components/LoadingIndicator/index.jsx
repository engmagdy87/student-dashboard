import React from "react";
import "./index.css";
const LoadingIndicator = () => (
  <div className="spinner-container">
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  </div>
);

export default LoadingIndicator;
