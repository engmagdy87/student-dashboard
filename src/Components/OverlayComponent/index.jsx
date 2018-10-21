import React from "react";

import "./index.css";

const overlayCssClass = visibility => {
  if (!visibility) return "overlay-off";
  return "overlay-on";
};

const Overlay = ({ visibility }) => (
  <div className={overlayCssClass(visibility)}>
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  </div>
);

export default Overlay;
