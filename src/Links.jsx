/** @format */

import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Links(props) {
  let themeClasses = "";
  if (props.theme === "primary") {
    themeClasses =
      "flex items-center px-2 py-2 font-medium text-gray-300 rounded-md pr-36 text-md hover:bg-gray-700 hover:text-white group undefined";
  } else {
    themeClasses = "";
  }

  return (
    <div>
      <Link
        onClick={props.onClick}
        className={" " + themeClasses}
        to={props.to}
      >
        <span className="mr-4 font-bold text-white ">{props.icon}</span>{" "}
        {props.children}
      </Link>
    </div>
  );
}

export default Links;
