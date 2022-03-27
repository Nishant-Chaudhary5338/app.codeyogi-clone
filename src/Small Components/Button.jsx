import React from "react";

function Button(props) { 
    return (
        <button className="px-4 py-2 text-white bg-blue-600 border border-blue-800 rounded-md hover:bg-blue-300">{props.children }</button>
    );
}

export default Button;