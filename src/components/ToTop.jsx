import React from "react";

const ToTop = () => {
  return (
    <button className="scroll-top scroll-to-target" data-target="html">
      <span>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </span>
    </button>
  );
};

export default ToTop;
