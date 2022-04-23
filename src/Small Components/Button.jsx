/** @format */

import React from "react";

function Button({ theme, children, ...rest }) {
  let themeClasses = "";
  if (theme === "red") {
    themeClasses = "bg-red-500 border border-red-800 hover:bg-red-300";
  } else {
    themeClasses = "bg-blue-600 border border-blue-800  hover:bg-blue-300";
  }
  return (
    <button
      {...rest}
      className={
        "px-4 py-2 disabled:bg-gray-400 text-white rounded-md active:bg-black  " +
        themeClasses
      }
    >
      {children}
    </button>
  );
}

export default Button;
