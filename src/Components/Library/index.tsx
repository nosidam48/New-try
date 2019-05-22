import React from "react";

interface Options {
    message: string,
    type: string,
    position: string,
    isOpen: boolean,
    options: any
}

const ToastContainer = (options: Options) => {
  return (
    <div
      className={
        options.isOpen ? `${options.position || "top-right"} ${options.type || "info"}` : "hide"
      }
    >
      <p>{options.message}</p>
    </div>
  );
};

export default ToastContainer;