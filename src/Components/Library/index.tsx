import React from "react";


const ToastContainer = ({ options: { message, type, position } }) => {
  return (
    <div
      className={
        message ? `${position || "top-right"} ${type || "info"}` : "hide"
      }
    >
      <p>{message}</p>
    </div>
  );
};

export default ToastContainer;