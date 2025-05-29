import React from "react";
import "./dialog.css";

const Dialog = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="dialog">{children}</div>
    </div>
  );
};
export default Dialog;
