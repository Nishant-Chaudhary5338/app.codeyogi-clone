/** @format */

import React from "react";

function A(props) {
  return (
    <a
      onClick={props.onClick}
      className="text-blue-500 underline hover:text-blue-800"
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  );
}

export default A;
