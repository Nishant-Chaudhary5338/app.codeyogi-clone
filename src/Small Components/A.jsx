import React from "react";

function A(props) {
    return (
        <a className="text-blue-500 underline hover:text-blue-800" href={props.href}>{props.children }</a>
    );
}

export default A;